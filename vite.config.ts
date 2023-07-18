import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    resolve: {
        alias: [
            { find: '@/models', replacement: fileURLToPath(new URL('./src/domain/models/index.ts', import.meta.url)) },
            { find: '@/repositories', replacement: fileURLToPath(new URL('./src/domain/repositories/', import.meta.url)) },
            { find: '@/mocks', replacement: fileURLToPath(new URL('./src/mocks/', import.meta.url)) }
        ]
    }
});
