import { defineConfig } from "vitepress";
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue-dialog-manager",
  description: "document for vue-dialog-manager",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Element-Plus Examples", link: "/" },
          { text: "Ant-Design-Vue Examples", link: "/ant-design-vue.md" },
          { text: "Naive-Ui Examples", link: "/naive-ui.md" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/shilim-developer/vue-dialog-manager.git",
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [ElementPlus({}), demoblockVitePlugin()],
    ssr: {
      noExternal: ["element-plus", "naive-ui"],
    },
  },
});
