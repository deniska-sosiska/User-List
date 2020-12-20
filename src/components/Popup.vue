<template>
  <div class="popup">
    <div class="popup__body">
      <div class="popup__content">
        <i class="far fa-times-circle" @click="getPopupIsActive()"></i>
        <div class="content__title">
          <p>Gender users</p>
        </div>
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  computed: {
    getInfoAboutGenders() {
      return this.$store.getters.getInfoAboutGenders
    }
  },
  mounted() {
    this.getChart()
  },
  methods:{
    getPopupIsActive() {
      this.$store.commit('setPopupIsActive', !this.getInfoAboutGenders)
    },
    getChart() {
      this.renderChart({
        labels: ['Male', 'Female'],
        datasets: [{
          label: '# of Votes',
          data: [
            this.getInfoAboutGenders.male,
            this.getInfoAboutGenders.female
          ],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      })
    }
  },
  props: ['popupIsActive']
}
</script>

<style>

  .search_and_showChart > input {
    padding: 4px 8px;
  }
  .search_and_showChart > button {
    padding: 4px 8px;
    margin: 0px 40px;
  }
  .popup {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
  }
  .popup__body {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
  }
  .popup__content {
    position: fixed;
    background: #fff;
    padding: 30px;
    width: 750px;
    height: 450px;
  }
  .popup__content > i {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  canvas {
    width: 100%;
    height: 90%;
  }
  .content__title > p {
    font-size: 28px;
    padding: 10px 0px;
    text-align: center;
  }
</style>
