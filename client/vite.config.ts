import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from 'dotenv'
dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@pages": "/src/pages",
    },
  },
});
