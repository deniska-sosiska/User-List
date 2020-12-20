<template>
  <div class="userList_item">
    <div class="main_info column" :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''">
      <div class="image"><img :src="user.picture.thumbnail"></div>
      <div><p>{{user.name.last}}</p></div>
      <div><p>{{user.name.first}}</p></div>
      <div><p>{{user.login.username}}</p></div>
      <div><p>{{user.phone}}</p></div>
      <div><p>{{user.location.country}}</p></div>
      <div @click="showAdditionalInformation(indexOfUser)"><i :class="selectedPlusMinus(indexOfUser)"></i></div>
    </div>
    <UserAdditionalInfo v-show="getSelectedID == indexOfUser"
    :user="user" :indexOfUser="indexOfUser" />
  </div>
</template>

<script>
  import UserAdditionalInfo from './User-additional-info.vue'

  export default {
    computed: {
      getSelectedID() { return this.$store.getters.getSelectedID  } 
    },
    methods: {
      showAdditionalInformation(indexOfUser) {
        let value = this.getSelectedID != indexOfUser ? indexOfUser : null  
        this.$store.commit('setSelectedID', value)
      },
      selectedPlusMinus(indexOfUser) {
        let res = indexOfUser ==  this.getSelectedID ? "fas fa-minus" : "fas fa-plus"
        return res
      }
    },
    mounted() {
      this.$store.commit('setSelectedID', null)
    },
    components: {
        UserAdditionalInfo
    },
    props: [
      "user",
      "indexOfUser"
    ]
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
    user-select: none;
  }
  .main_info > div {  padding: 6px 0px;  }
  i {
    cursor: pointer;
    font-size: 38px;
    font-weight: 100;
  }
</style>