import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    allowedHosts: ['9705-168-119-152-149.ngrok-free.app'],
  }
});
