<template>
  <div class="additional_info" :style="indexOfUser % 2 == 0 ? 'background: #d9d9d9' : ''">
    qwe
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
    }
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
</style>