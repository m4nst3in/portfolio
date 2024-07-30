import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://m4portfolioapi-fsarftahh7f4fedu.brazilsouth-01.azurewebsites.net',
        changeOrigin: true,
        secure: false,
      },
    },
    host: '127.0.0.1'
  },
});
