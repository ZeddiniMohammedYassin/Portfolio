import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // allow access from LAN
    port: 8080,      // dev server runs on port 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // only load tagger in dev
  ].filter(Boolean),
  resolve: {
    alias: {
      // ✅ allow "@/..." to point to "src/"
      "@": path.resolve(__dirname, "src"),
      // optional: add an alias just for assets
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
}));
