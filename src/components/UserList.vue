<template>
    <div class="userList_wrapper">
        <div
            v-if="loading"
            class="loader-container"
        >
            <p>Loading data...</p>
            <component
                :is="currentSpinnerComponentName"
                :size="200"
                :color="'#486684'"
                class="spinner-loader"
            />
            <p>
                If loading data takes more than 15-20 seconds, then something is wrong
                with the api connection, please reload the page.
            </p>
        </div>
        <div
            v-else
            class="userList"
        >
            <div class="userList__header column">
                <div
                    v-for="(name, index) in headerNames"
                    :key="index"
                >
                    <p>{{ name }}</p>
                </div>
            </div>
            <div class="userList_items">
                <UserListItem
                    v-for="(user, index) in filteredUsers"
                    :key="index"
                    :user="user"
                    :user-index="index"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useUserAPI } from '@/composables/userAPI.js';
    import { useSwitchSpinnerComponents } from '@/composables/switchSpinnerComponents.js';
    import UserListItem from '@/components/UserListItem.vue';


    const props = defineProps({
        searchedName: {
            type: String,
            default: '',
        },
    });

    const { users, loading } = useUserAPI();
    const { currentSpinnerComponentName } = useSwitchSpinnerComponents();
    const headerNames = ['', 'Last', 'First', 'Username', 'Phone', 'Location', ''];

    const filteredUsers = computed(() => {
        if (!props.searchedName) {
            return users.value;
        }

        const searchValue = props.searchedName.toLowerCase();
        return users.value.filter((item) => (
            item.name.first.toLowerCase().includes(searchValue) ||
            item.name.last.toLowerCase().includes(searchValue)
        ));
    });
</script>

<style>
    .userList {
        margin-bottom: 50px;
    }
    .userList__header {
        display: flex;
        padding: 10px 0px;
    }
    .userList__header > div {
        font-weight: bold;
        user-select: none;
    }
    .column > div {
        width: calc(100% / 7);
        text-align: center;
    }
    .column > div > p {
        text-align: start;
        padding-left: 20px;
    }
    .image > img {
        user-select: none;
        border-radius: 100%;
        border: 4px solid #fff;
    }

    .loader-container {
        font-size: 18px;
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
</style>
