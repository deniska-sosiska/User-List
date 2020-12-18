<template>
  <tr :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''" :key="user.login.md5"
  @click="showAdditionalInformation(indexOfUser)">
    <td class="image"><img :src="user.picture.thumbnail"></td>
    <td>{{user.name.last}}</td>
    <td>{{user.name.first}}</td>
    <td>{{user.login.username}}</td>
    <td>{{user.phone}}</td>
    <td>{{user.location.country}}</td>
    <td>+++</td>
  </tr>
</template>

<script>
export default {
  props: [
    "user",
    "indexOfUser"
  ],
  methods: {
    showAdditionalInformation(indexOfUser) {
      this.$store.commit('setArrayForUserAdditInfo', indexOfUser)
    }
  },
}
</script>

<style scoped>
  tr {
    padding: 0px 15px;
  }
  .image > img {
    user-select: none;
    border-radius: 100%;
    border: 4px solid #fff;
  }
</style>