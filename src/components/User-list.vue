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
      <template v-for="(user, index) in getData.results">
        <tr
        :style="index % 2 == 0 ? 'background: #d9d9d9' : ''" :key="user.login.md5"
        @click="showAdditionalInformation(index)"
        >
          <td class="image"><img :src="user.picture.thumbnail"></td>
          <td>{{user.name.last}}</td>
          <td>{{user.name.first}}</td>
          <td>{{user.login.username}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.location.country}}</td>
          <td>+++</td>
        </tr>
        <tr
        v-if="zxc[index] == true"
        :style="index % 2 == 0 ? 'background: #d9d9d9' : ''"
        :key="user.login.md5 + 'qwe'" class="additionalInformation">
          <td colspan="3">
            <div style="display: flex; flex-direction: column; justify-content:center">
              <p>qwe</p>
              <p>zxc</p>
              <p>zqwe</p>
            </div>
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
      zxc: []
    }
  },
  computed: {
    getData(){
      console.log("vue: ", this.$store.getters.getData.results)
      // let zxc = this.$store.getters.getData.results
      return this.$store.getters.getData
    }
  },
  mounted() {
    this.$store.dispatch('updateData', 10)
  },
  methods: {
    showAdditionalInformation(index) {
      !this.zxc[index] ? this.zxc[index] = true : this.zxc[index] = false
      console.log(this.zxc)
    }
  }
}
</script>

<style>
  .users {
    margin: 20px auto;
    border-spacing: 0px;
  }
  .additionalInformation {
    height: 200px;
    /* background: #000; */
  }
  th {
    padding-bottom: 5px;
    text-align: center;
  }
  td {
    padding: 8px 20px;
    text-align: center;
  }
  tr {
    padding: 0px 15px;
  }
  .image > img {
    user-select: none;
    border-radius: 100%;
    border: 4px solid #fff;
  }
</style>