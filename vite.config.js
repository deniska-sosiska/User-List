/* global __dirname */
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';


export default defineConfig({
    server: {
        port: 8080,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        checker({
            eslint: {
                lintCommand: 'eslint . --ext .js,.vue',
            },
        }),
    ],
    test: {
        environment: 'happy-dom',
    },
});
