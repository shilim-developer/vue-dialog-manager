import { defineConfig } from "vitepress";
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import ElementPlus from "unplugin-element-plus/vite";
import { sidebar as EnSidebar } from "./sidebars/en";
import { sidebar as ZhSidebar } from "./sidebars/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vue-dialog-manager/",
  title: "vue-dialog-manager",
  description: "document for vue-dialog-manager",
  lang: "en",
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        sidebar: EnSidebar,
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      themeConfig: {
        sidebar: ZhSidebar,
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
