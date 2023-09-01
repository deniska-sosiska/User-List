<template>
    <div class="userList_item">
        <div
            class="main_info column"
            :class="{ 'gray_bg': userIndex % 2 === 0 }"
        >
            <div class="image">
                <img :src="user.picture.thumbnail" />
            </div>
            <div>
                <p>{{ user.name.last }}</p>
            </div>
            <div>
                <p>{{ user.name.first }}</p>
            </div>
            <div>
                <p>{{ user.login.username }}</p>
            </div>
            <div>
                <p>{{ user.phone }}</p>
            </div>
            <div>
                <p>{{ user.location.country }}</p>
            </div>
            <div @click="showAdditionalInformation(userIndex)">
                <i :class="selectedPlusMinus(userIndex)"></i>
            </div>
        </div>

        <UserListItemMoreInfo
            v-show="isActive(userIndex)"
            :user="user"
            :user-index="userIndex"
        />
    </div>
</template>

<script setup>
    import UserListItemMoreInfo from '@/components/UserListItemMoreInfo.vue';
    import { useActiveUserState } from '@/composables/activeUserState.js';

    const props = defineProps({
        user: {
            type: Object,
            required: true,
        },
        userIndex: {
            type: Number,
            required: true,
        },
    });

    const { isActive, changeActiveUserID } = useActiveUserState();

    const selectedPlusMinus = () => isActive(props.userIndex) ? 'fas fa-minus' : 'fas fa-plus';

    const showAdditionalInformation = () => {
        if (isActive(props.userIndex)) {
            return  changeActiveUserID(null);
        }

        changeActiveUserID(props.userIndex);
    };
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
    .main_info > div {
        padding: 6px 0px;
    }
    i {
        cursor: pointer;
        font-size: 38px;
        font-weight: 100;
    }

    .gray_bg {
        background-color: #d9d9d9;
    }

</style>
