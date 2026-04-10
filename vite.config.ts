import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@relume_io/relume-ui": path.resolve(__dirname, "src/lib/relume-ui.tsx"),
    }
  },
  base: "/",
  server: {
    allowedHosts: ['9705-168-119-152-149.ngrok-free.app'],
  }
});
