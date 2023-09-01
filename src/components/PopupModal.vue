<template>
    <div class="popup">
        <div class="popup__body">
            <div class="popup__content">
                <i
                    class="far fa-times-circle"
                    @click="closePopup()"
                ></i>

                <div class="content__title">
                    <p>Gender users</p>
                </div>

                <canvas ref="canvas"></canvas>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale, Tooltip, Title, Legend } from 'chart.js';
    import { ref, watchEffect, onMounted } from 'vue';
    import { useUserAPI } from '@/composables/userAPI.js';
    import { usePopupState } from '@/composables/popupState.js';


    const canvas = ref(null);
    const { popupToggle } = usePopupState();
    const { usersSexStatistics } = useUserAPI();

    const closePopup = () => popupToggle();

    onMounted(() => {
        ChartJS.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip, Title, Legend);

        new ChartJS(canvas.value, {
            type: 'bar',
            data: {
                labels: ['Statistics according to Sex'],
                datasets: [{
                    label: ['Percent of males'],
                    data: [usersSexStatistics.malePercent],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },{
                    label: ['Percent of females'],
                    data: [usersSexStatistics.femalePercent],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }],
            }
        });
    });

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
