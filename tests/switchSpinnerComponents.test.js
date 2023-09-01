import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { isRef } from 'vue';
import { useSwitchSpinnerComponents } from '@/composables/switchSpinnerComponents';
import { withSetup } from './test-utils';

describe('Spinner components switch composable test', () => {
    beforeEach(() => { vi.useFakeTimers(); });
    afterEach(() => { vi.useRealTimers(); });

    test('To be defined', () => {
        expect(useSwitchSpinnerComponents).toBeDefined();
    });

    const [{ currentSpinnerComponentName, changeCurrentSpinnerComponent }, app] = withSetup(useSwitchSpinnerComponents);

    test('Verify that property is ref', () => {
        expect(isRef(currentSpinnerComponentName)).toBeTruthy();
    });

    test('Verify that spinner components is switching', async () => {
        const initialComponentName = currentSpinnerComponentName.value.name;
        changeCurrentSpinnerComponent();
        expect(initialComponentName).not.toBe(currentSpinnerComponentName.value.name);
    });

    app.unmount();
});
