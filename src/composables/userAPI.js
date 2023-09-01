import { reactive, ref } from 'vue';
const API_URL = 'https://randomuser.me/api/';
const DELAY_MS = 800;

const users = ref(null);
const loading = ref(false);
const usersSexStatistics = reactive({
    malePercent: 0,
    femalePercent: 0,
});

export function useUserAPI() {

    const fetchUsers = async (limit = 35) => {
        const query = new URLSearchParams({ results: limit }).toString();

        loading.value = true;
        usersSexStatistics.malePercent = 0;
        usersSexStatistics.femalePercent = 0;

        return fetch(`${API_URL}?${query}`)
            .then((res) => res.json())
            .then((res) => {
                let maleCount = 0;
                res.results.forEach((element) => element.gender === 'male' && maleCount++);

                users.value = res.results;
                usersSexStatistics.malePercent = maleCount / res.results.length * 100;
                usersSexStatistics.femalePercent = 100 - usersSexStatistics.malePercent;
            })
            .catch((e) => console.error(e))
            .finally(() => setTimeout(() => loading.value = false, DELAY_MS));
    };

    return {
        users,
        loading,
        usersSexStatistics,
        fetchUsers,
    };
}
