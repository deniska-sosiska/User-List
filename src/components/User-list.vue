<template>
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
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      arrayForUserAdditInfo: []
    }
  },
  computed: {
    getData(){
      console.log("vue: ", this.$store.getters.getData.results[0])
      return this.$store.getters.getData
    }
  },
  mounted() {
    this.$store.dispatch('updateData', 3)
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