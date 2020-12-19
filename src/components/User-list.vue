<template>
<div>
  <div class="userList">
    <div class="userList__header column">
      <div v-for="(name, index) in headerNames" :key="index">{{name}}</div>
    </div>
    <div class="userList_items">
      <User v-for="(user, indexOfUser) in getData.results" :key="user.login.md5"
      :user="user" :indexOfUser="indexOfUser" />
    </div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

import User from './User.vue'

export default {
  data() {
    return {
      find: '',
      arrayForUserAdditInfo: [],
      headerNames: ['', 'Last', 'First', 'Username', 'Phone', 'Location', '']
    }
  },
  computed: {
    getData(){
      if (!this.find) {
        // console.log("vue: ", this.$store.getters.getData.results[0].name)
        return this.$store.getters.getData
      }
    }
  },
  mounted() {
    this.$store.dispatch('updateData', 3)
  },
  components: {
    User
  }
}
</script>

<style>
  .userList__header {
    display: flex;
    padding: 10px 0px;
    /* justify-content: center; */
  }
  .userList__header > div {
    font-weight: bold;
    user-select: none;
  }
  /* .userList_item {
    display: flex;
    align-items: center;
  }
  .userList_item > div {
    padding: 6px 0px;
  } */
  .column > div {
    width: calc(100% / 7);
    text-align: center;
  }
  .image > img {
    user-select: none;
    border-radius: 100%;
    border: 4px solid #fff;
  }
</style>