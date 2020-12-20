<template>
  <div id="app">
    <Popup v-if="getPopupIsActive"/>
    <div class="container">
      <div class="search_and_showChart">
        <label for="search">Search by name: </label>
        <input type="text" id="search" v-model="searchedName">
        <button @click="setPopupIsActive()">Show chart</button>
      </div>
      <UserList :searchedName='searchedName' />
    </div>    
  </div>
</template>

<script>
import Vue from 'vue'

import UserList from './components/User-list.vue'
import Popup from './components/Popup.vue'

export default {
  name: 'App',
  data() {
    return {
      searchedName: '',
      popupIsActive: false
    }
  },
  computed: {
    getPopupIsActive() {
      return this.$store.getters.getPopupIsActive
    }
  },
  methods: {
    setPopupIsActive() {
      this.$store.commit('setPopupIsActive', !this.getPopupIsActive)
    }
  },
  mounted() {
      this.$store.commit('setPopupIsActive', false)
  },
  components: {
    UserList,
    Popup
  }
}
</script>

<style>
  @font-face {
    font-family: 'Comfortaa';
    src:url('./assets/Comfortaa-Regular.ttf');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #2c3e50;
    font-family: "Comfortaa";
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  body {
    background: #e6e6e6;
  }
  
  .search_and_showChart {
    text-align: center;
    padding: 40px 0px;
  }
  .search_and_showChart > input {
    padding: 4px 8px;
    margin-left: 5px;
  }
  .search_and_showChart > button {
    font-size: 15px;
    padding: 4px 8px;
    margin: 0px 40px;
  }
</style>
