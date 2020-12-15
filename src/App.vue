<template>
  <div id="app" class="container">
    <userList />
  </div>
</template>

<script>
import Vue from 'vue'
import userList from './components/User-list.vue'

export default {
  name: 'App',
  components: {
    userList
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
</style>
