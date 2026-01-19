import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./", // <--- CHANGE THIS (safest option for assets)
  server: {
    host: true,
    allowedHosts: "all",
  },
  preview: {
    host: true,
    allowedHosts: "all",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});