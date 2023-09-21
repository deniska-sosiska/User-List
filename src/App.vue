<template>
    <div id="app">
        <PopupModal v-if="isPopupActive" />
        <div class="container">
            <div class="search_and_showChart">
                <input
                    id="search"
                    v-model="searchedName"
                    type="text"
                    placeholder="Search by name"
                    @input="clearID()"
                />
                <button
                    :disabled="loading"
                    @click="popupToggle()"
                >
                    <span>{{ buttonText }}</span>
                </button>
            </div>
            <UserList :searched-name="searchedName" />
        </div>
    </div>
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';
    import UserList from '@/components/UserList.vue';
    import PopupModal from '@/components/PopupModal.vue';
    import { useUserAPI } from '@/composables/userAPI.js';
    import { usePopupState } from '@/composables/popupState.js';
    import { useActiveUserState } from '@/composables/activeUserState';


    const searchedName = ref('');
    const { loading, fetchUsers } = useUserAPI();
    const { changeActiveUserID } = useActiveUserState();
    const { isPopupActive, popupToggle } = usePopupState();

    const buttonText = computed(() => isPopupActive.value ? 'Close chart' : 'Show chart');

    const clearID = () => changeActiveUserID(null);

    onMounted(fetchUsers);
</script>

<style>
    @font-face {
        font-family: "Comfortaa";
        src: url("/Comfortaa-Regular.ttf");
    }
    :root {
        --gray-color: #d9d9d9;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #2c3e50;
        font-family: "Comfortaa";
    }

    body {
        background: #e6e6e6;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .search_and_showChart {
        text-align: center;
        padding: 40px 0px;
    }

    .search_and_showChart > #search {
        width: 300px;
        height: 40px;
        font-size: 18px;
        padding-inline: 25px 15px;
        border: 1px solid var(--gray-color);
        border-radius: 32px;
        outline: none;
    }

    .search_and_showChart > button {
        position: absolute;
        right: 16px;
        height: 40px;
        width: 160px;
        font-size: 16px;
        border: 2px solid var(--gray-color);
        box-shadow: 0 0 16px 2px var(--gray-color);
        border-radius: 32px;
        padding: 4px 8px;
        cursor: pointer;
        z-index: 5;
    }

    .search_and_showChart > button:active {
        transform: translate(0, 2px);
    }

    .search_and_showChart > button:disabled {
        cursor: wait;
    }
</style>
