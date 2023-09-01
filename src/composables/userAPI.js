import { reactive, ref } from 'vue';
const API_URL = 'https://randomuser.me/api/';
const DELAY_MS = 8000;

const users = ref(null);
const loading = ref(false);
const usersSexStatistics = reactive({
    malePercent: 0,
    femalePercent: 0,
});

export function useUserAPI(limit = 35, getExistingStatistics = false) {
    const query = new URLSearchParams({ results: limit }).toString();

    const fetchUsers = () => {
        loading.value = true;
        usersSexStatistics.malePercent = 0;
        usersSexStatistics.femalePercent = 0;

        fetch(`${API_URL}?${query}`)
            .then((res) => res.json())
            .then((res) => {
                let maleCount = 0;
                res.results.forEach(element => element.gender === 'male' && maleCount++);

                users.value = res.results;
                usersSexStatistics.malePercent = maleCount / res.results.length * 100;
                usersSexStatistics.femalePercent = 100 - usersSexStatistics.malePercent;
            })
            .catch((e) => console.error(e))
            .finally(() => setTimeout(() => loading.value = false, DELAY_MS));
    };

    if (!getExistingStatistics) {
        fetchUsers();
    }

    return {
        users,
        loading,
        usersSexStatistics,
    };
}
