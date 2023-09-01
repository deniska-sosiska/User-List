import { ref } from 'vue';

const activeUserID = ref(null);

export function useActiveUserState() {
    return {
        activeUserID,
        isActive: (userID) => activeUserID.value === userID,
        changeActiveUserID: (userID) => activeUserID.value = userID,
    };
}
