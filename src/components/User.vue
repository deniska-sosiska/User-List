<template>
  <div class="userList_item">
    <div class="main_info column" :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''">
      <div class="image"><img :src="user.picture.thumbnail"></div>
      <div>{{user.name.last}}</div>
      <div>{{user.name.first}}</div>
      <div>{{user.login.username}}</div>
      <div>{{user.phone}}</div>
      <div>{{user.location.country}}</div>
      <div @click="showAdditionalInformation(indexOfUser)">+++</div>
    </div>
    <UserAdditionalInfo v-if="getSelectedID == indexOfUser"
    :user="user" :indexOfUser="indexOfUser" />
  </div>
</template>

<script>
  import UserAdditionalInfo from './User-additional-info.vue'

  export default {
    computed: {
      getSelectedID() {  return this.$store.getters.getSelectedID  } 
    },
    methods: {
      showAdditionalInformation(indexOfUser) {
        this.$store.commit('setSelectedID', indexOfUser)
      }
    },  
    props: [
      "user",
      "indexOfUser"
    ],
    components: {
      UserAdditionalInfo
    }
  }
</script>

<style>
  .image > img {
    user-select: none;
    border-radius: 100%;
    border: 4px solid #fff;
  }
  .main_info {
    display: flex;
    align-items: center;
  }
  .main_info > div {  padding: 6px 0px;  }
  /* .additional_info {} */
</style>