<template>
  <div class="userList_wrapper">
    <div v-if="loading" class="loader">
      <p>Loading data...</p>
      <EllipsisLoader :color="'#b3b3b3'" />
      <p>If loading data takes more than 5-10 seconds, then something is wrong with the api connection, please reload the page.</p>
    </div>
    <div v-else class="userList">
      <div class="userList__header column">
        <div v-for="(name, index) in headerNames" :key="index">
          <p>{{name}}</p>
        </div>
      </div>
      <div class="userList_items">
        <User v-for="(user, indexOfUser) in getData" :key="indexOfUser"
        :user="user" :indexOfUser="indexOfUser" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

import User from './User.vue'
// import EllipsisLoader from '@bit/joshk.vue-spinners-css.ellipsis-loader'

export default {

  
  data() {
    return {
      loading: true,
      headerNames: ['', 'Last', 'First', 'Username', 'Phone', 'Location', '']
    }
  },
  computed: {
    getData(){
      if (!this.searchedName) 
        return this.$store.getters.getData
      else {
        let res = [], nameUser,
            searchedNameF = this.searchedName.toLowerCase()
        this.$store.getters.getData.forEach(elem => {
          nameUser = elem.name.first.toLowerCase()
          nameUser.includes(searchedNameF) ? res.push(elem) : null; 
        })
        return res
      }
    }
  },
  async mounted() {
    this.loading = await this.$store.dispatch('updateData', 15)
  },
  props: ['searchedName'],
  components: {
    User
    // EllipsisLoader
  }
}
</script>

<style>
  .userList {
    margin-bottom: 50px;
  }
  .userList__header {
    display: flex;
    padding: 10px 0px;
  }
  .userList__header > div {
    font-weight: bold;
    user-select: none;
  }
  .column > div {
    width: calc(100% / 7);
    text-align: center;
  }
  .column > div > p {
    text-align: start;
    padding-left: 20px;
  }
  .image > img {
    user-select: none;
    border-radius: 100%;
    border: 4px solid #fff;
  }
  .loader {
    text-align: center;
    font-size: 18px;
  }
</style>