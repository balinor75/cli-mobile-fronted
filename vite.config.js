import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: ["swlncd-3000.csb.app"],
    allowedHosts: ["swlncd-50000.csb.app"],
  },
});
