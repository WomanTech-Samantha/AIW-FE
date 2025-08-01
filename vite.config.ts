import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib":        path.resolve(__dirname, "./src/lib"),
      "@hooks":      path.resolve(__dirname, "./src/hooks"),
      "@pages":      path.resolve(__dirname, "./src/pages"),
      "@integrations": path.resolve(__dirname, "./src/integrations"),
    },
  },
}));
