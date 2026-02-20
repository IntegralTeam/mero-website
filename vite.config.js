import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@relume_io/relume-ui": path.resolve(__dirname, "src/lib/relume-ui.jsx"),
    }
  },
  base: "/mero-website/"
});
