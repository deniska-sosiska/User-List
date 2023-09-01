import { createApp } from 'vue';

export const withSetup = (composable) => {
    let composableResult;

    const app = createApp({
        setup() {
            composableResult = composable();
            return () => {};
        }
    });

    app.mount(document.createElement('div'));

    return [composableResult, app];
};
