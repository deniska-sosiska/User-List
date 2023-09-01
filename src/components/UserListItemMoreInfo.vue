<template>
    <div
        class="additional_info"
        :class="{ 'gray_bg': userIndex % 2 === 0 }"
    >
        <div class="wrapper_column_add">
            <div class="column_add">
                <span style="font-size: 28px">{{ user.name.first }} <i :class="getCorrespondingIcon(user.gender)"></i>
                </span>
                <p><span>Username</span>: {{ user.login.username }}</p>
                <p><span>Registered</span>: {{ getPrettyDate(user.registered.date) }}</p>
                <p><span>Email</span>: {{ user.email }}</p>
            </div>
        </div>
        <div class="wrapper_column_add mini">
            <div class="column_add">
                <p>
                    <span>Address</span>: {{ user.location.street.name }}
                    {{ user.location.street.number }}
                </p>
                <p><span>City</span>: {{ user.location.city }}</p>
                <p><span>Zip Code</span>: {{ user.location.postcode }}</p>
            </div>
        </div>
        <div class="wrapper_column_add mini">
            <div class="column_add">
                <p><span>Birthday</span>: {{ getPrettyDate(user.dob.date) }}</p>
                <p><span>Phone</span>: {{ user.phone }}</p>
                <p><span>Cell</span>: {{ user.cell }}</p>
            </div>
        </div>
        <div
            class="image"
            style="padding-top: 0px"
        >
            <img :src="user.picture.large" />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        user: {
            type: Object,
            required: true,
        },
        userIndex: {
            type: Number,
            required: true,
        },
    });

    const getCorrespondingIcon = (sex) => `fas fa-${sex}`;
    const getPrettyDate = (date) => new Date(date).toLocaleDateString('en-US');
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
    span {
        font-weight: bold;
    }

    .gray_bg {
        background-color: #d9d9d9;
    }
</style>
