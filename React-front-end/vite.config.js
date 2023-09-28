import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  server: {
    proxy: {
      "/serverip": {
        target: "http://192.168.1.106:8000/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/serverip/, ""),
      },
      "/images_host": {
        target: "http://192.168.1.106:8000/storage/images",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images_host/, ""),
      },
    },
    host: true,
  },
});
