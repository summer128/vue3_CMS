import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      // 更多配置见最下方
      supportTs: true,
      logger: false,
      mockPath: "mock", // 文件位置
    }),
  ],
});
