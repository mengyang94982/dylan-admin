import { defineConfig, loadEnv } from "vite";

import { getRootPath, getSrcPath, setupVitePlugins, viteDefine } from "./build";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as ImportMetaEnv;
  const rootPath = getRootPath();
  const srcPath = getSrcPath();

  return {
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      },
    },
    define: viteDefine,
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@use "./src/styles/scss/global.scss" as *;` },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 8080,
      open: true,
    },
    optimizeDeps: {
      include: [
        "@antv/data-set",
        "@antv/g2",
        "@better-scroll/core",
        "echarts",
        "swiper",
        "swiper/vue",
        "vditor",
        "wangeditor",
        "xgplayer",
      ],
    },
    plugins: setupVitePlugins(viteEnv),
  };
});
