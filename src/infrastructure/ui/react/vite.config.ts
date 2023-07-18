import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@/components', replacement: fileURLToPath(new URL('./src/components/', import.meta.url)) },
            { find: '@/assets', replacement: fileURLToPath(new URL('./src/assets/', import.meta.url)) },
            { find: '@/hooks', replacement: fileURLToPath(new URL('./src/hooks/', import.meta.url)) },
            { find: '@/domain', replacement: fileURLToPath(new URL('../../../domain/', import.meta.url)) },
            { find: '@/mocks', replacement: fileURLToPath(new URL('../../../mocks/', import.meta.url)) },
            { find: '@/repositories', replacement: fileURLToPath(new URL('../../../infrastructure/repositories/', import.meta.url)) },
            { find: '@/services', replacement: fileURLToPath(new URL('../../../domain/services/', import.meta.url)) }
        ]
    }
});
