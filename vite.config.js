import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vuePlugin from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vuePlugin(), tailwindcss()],
});
