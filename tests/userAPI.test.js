import { describe, test, expect, vi } from 'vitest';
import { useUserAPI } from '@/composables/userAPI.js';
import { isReactive, isRef } from 'vue';

describe('UserAPI composable test', () => {
    test('To be defined', () => {
        expect(useUserAPI).toBeDefined();
    });

    const { users, loading, usersSexStatistics } = useUserAPI(null, true);

    test('To have general properties', () => {
        expect(users).toBeDefined();
        expect(loading).toBeDefined();
        expect(usersSexStatistics).toBeDefined();
    });

    test('Verify that properties is reactive variables', () => {
        expect(isRef(users)).toBeTruthy();
        expect(isRef(loading)).toBeTruthy();
        expect(isReactive(usersSexStatistics)).toBeTruthy();
    });

    test('Correspond initial state', () => {
        expect(users.value).toBeNull();
        expect(loading.value).toBe(false);
        expect(usersSexStatistics).toEqual({ malePercent: 0, femalePercent: 0 });
    });

    test('Fetch users works properly', async () => {
        const { fetchUsers, users } = useUserAPI();

        const limit = 10;
        await fetchUsers(limit);
        const fetchedUsers = users.value;

        expect(fetchedUsers).toBeDefined();
        expect(Array.isArray(fetchedUsers)).toBeTruthy();
        expect(fetchedUsers.length).toBe(limit);

        expect(fetchedUsers[0])
            .toHaveProperty('name')
            .toHaveProperty('email')
            .toHaveProperty('location');
    });
});
