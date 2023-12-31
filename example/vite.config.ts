import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'vue-yue-example',
      fileName: 'app',
      formats: ['es']
    },
    rollupOptions: {
      external: ['path', 'gui']
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      'vue-yue': fileURLToPath(new URL('../dist', import.meta.url))
    }
  }
});