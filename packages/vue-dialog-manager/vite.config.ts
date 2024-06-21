import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
const outputDir = path.resolve(__dirname, "./lib");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vue-dialog-manager",
      formats: ["es", "umd"],
      fileName: (format) => `vue-dialog-manager.${format}.js`,
    },
    outDir: outputDir,
  },
});
