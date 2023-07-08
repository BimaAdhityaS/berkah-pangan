import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),

        react(),
    ],

    root: path.join(__dirname, "src"),

    build: {
      outDir: path.join(__dirname, "dist"),
      rollupOptions: {
        input: glob.sync(path.resolve(__dirname, "src", "*.jsx")),
      },
    },
});
