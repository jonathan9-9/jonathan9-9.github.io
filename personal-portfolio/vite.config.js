import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://jonathan9-9.github.io/",
  plugins: [react()],
});
