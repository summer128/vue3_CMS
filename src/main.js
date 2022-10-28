import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "./assets/css/base.scss";

import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "./mock/index";

// pinia
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router).use(ElementPlus).use(createPinia()).mount("#app");

// 全局参数配置
app.config.globalProperties.$sysTitle = "个人信息系统";
console.log(app.config, "全局参数");

// 引入所有组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
