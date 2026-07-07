import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [
        react()
    ],
    logLevel: 'warning',
    build: {
        outDir: resolve(process.cwd(), '.mini-dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(process.cwd(), 'mini-games-index.html')
        }
    }
});
