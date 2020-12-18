<template>
<div>
  <div class="userList">
    <div class="userList__header">
      <div></div>
      <div>Last</div>
      <div>First</div>
      <div>Username</div>
      <div>Phone</div>
      <div>Location</div>
      <div></div>
    </div>
    <div class="userList_items">
      <div class="userList_item"
      v-for="(user, indexOfUser) in users.results" :key="user.login.md5"
      :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''"
      >
        <div class="image"><img :src="user.picture.thumbnail"></div>
        <div>{{user.name.last}}</div>
        <div>{{user.name.first}}</div>
        <div>{{user.login.username}}</div>
        <div>{{user.phone}}</div>
        <div>{{user.location.country}}</div>
        <div>+++</div>
      </div>
    </div>
  </div>

  <hr style="margin-top: 100px;">
   <table class="users">
    <thead>
      <tr>
        <th></th>
        <th>Last</th>
        <th>First</th>
        <th>Username</th>
        <th>Phone</th>
        <th>Location</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(user, indexOfUser) in getData.results" >
        <tr
        :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''" :key="user.login.md5"
        @click="showAdditionalInformation(indexOfUser)">
          <td class="image"><img :src="user.picture.thumbnail"></td>
          <td>{{user.name.last}}</td>
          <td>{{user.name.first}}</td>
          <td>{{user.login.username}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.location.country}}</td>
          <td>+++</td>
        </tr>
        <tr
        v-if="arrayForUserAdditInfo[indexOfUser]"
        :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''"
        :key="user.login.md5 + 'qwe'" class="additionalInformation">
          <td colspan="2">
            <div class="wrapper_column">
              <div class="column">
              <p style="font-size: 24px;">{{user.name.first}}</p>
              <p>Username: {{user.login.username}}</p>
              <p>Registered: {{user.registered.age}}</p>
              <p>Email: {{user.email}}</p>
              </div>
            </div>
          </td>
          <td colspan="2">
            <div class="wrapper_column">
              <div class="column">
              <p> </p>
              <p>Address: {{user.location.street.name}} {{user.location.street.number}}</p>
              <p>Registered: {{user.registered.age}}</p>
              <p>Email: {{user.email}}</p>
              </div>
            </div>
          </td>
          <td colspan="1">
            <div class="wrapper_column">
              <div class="column">
              <p> </p>
              <p>Address: {{user.location.street.name}} {{user.location.street.number}}</p>
              <p>Registered: {{user.registered.age}}</p>
              <p>Email: {{user.email}}</p>
              </div>
            </div>
          </td>
          <td colspan="2">
            <img :src="user.picture.large" alt="">
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      arrayForUserAdditInfo: []
    }
  },
  computed: {
    getData(){
      console.log("vue: ", this.$store.getters.getData.results[0])
      return this.users = this.$store.getters.getData
    }
  },
  mounted() {
    // this.$store.dispatch('updateData', 1)
    
    axios.get('https://randomuser.me/api/?results=1').then(res => {
      this.users = res.data 
    })
  },
  methods: {
    showAdditionalInformation(indexOfUser) {
      this.arrayForUserAdditInfo.forEach((elem, indexOfArray) => {
        if (elem == true && indexOfUser != indexOfArray) {
          Vue.set(this.arrayForUserAdditInfo, indexOfArray, false)
          return false
        }
      })
      Vue.set(this.arrayForUserAdditInfo, indexOfUser, !this.arrayForUserAdditInfo[indexOfUser])
    }
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
    width: calc(100% / 7);
    text-align: center;
    font-weight: bold;
    user-select: none;
  }
  .userList_item {
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  .userList_item > div {
    width: calc(100% / 7);
    text-align: center;
    padding: 6px 0px;
  }


  .users {
    margin: 20px auto;
    border-spacing: 0px;
  }
  .wrapper_column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .column {
    text-align: start;
    padding-left: 15px;
  }
  table {  width: 90%;  }
  tr {  padding: 0px 15px;  }
  th {
    padding-bottom: 5px;
    text-align: center;
  }
  td {
    padding: 4px 10px;
    text-align: center;
    cursor: pointer;
  }
  .image > img {
    user-select: none;
    border-radius: 100%;
    border: 4px solid #fff;
  }
</style>