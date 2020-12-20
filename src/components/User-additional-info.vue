<template>
  <div class="additional_info" :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''">
    <div class="wrapper_column_add">
      <div class="column_add">
        <span style="font-size: 28px;">{{user.name.first}} <i :class="gender(user.gender)"></i> </span>
        <p><span>Username</span>: {{user.login.username}}</p>
        <p><span>Registered</span>: {{date(user.registered.date)}}</p>
        <p><span>Email</span>: {{user.email}}</p>
      </div>
    </div>
    <div class="wrapper_column_add mini">
      <div class="column_add">
        <p><span>Address</span>: {{user.location.street.name}} {{user.location.street.number}}</p>
        <p><span>City</span>: {{user.location.city}}</p>
        <p><span>Zip Code</span>: {{user.location.postcode}}</p>
      </div>
    </div>
    <div class="wrapper_column_add mini">
      <div class="column_add">
        <p><span>Birthday</span>: {{date(user.dob.date)}}</p>
        <p><span>Phone</span>: {{user.phone}}</p>
        <p><span>Cell</span>: {{user.cell}}</p>
      </div>
    </div>
    <div class=" image" style="padding-top: 0px;">
      <img :src="user.picture.large">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedID: null
    }
  },
  methods: {
    showAdditionalInformation(indexOfUser) {
      this.$store.commit('setSelectedID', indexOfUser)
    },
    date(userData) {
      let res = new Date(userData).toLocaleDateString('en-US');
      return res
    },
    gender(value) {
      let res = value == "male"? "fas fa-male":"fas fa-female"
      return res
    }
  },  
  props: ["user","indexOfUser"]
}
</script>

<style>
  .additional_info {
    display: flex;
    justify-content: space-around;
    padding: 14px 20px;
  }
  .mini {
    padding-top: 40px;
  }
  span { font-weight: bold;  }
</style>