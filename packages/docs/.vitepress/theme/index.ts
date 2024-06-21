import DefaultTheme from "vitepress/theme";

// import "@ruabick/vitepress-demo-block/dist/style.css";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import { useComponents } from "./useComponents";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册ElementPlus
    // app.use(ElementPlus, {});
    useComponents(app);
  },
};
