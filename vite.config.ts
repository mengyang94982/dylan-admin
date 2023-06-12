import { defineConfig, loadEnv } from "vite"

import { getRootPath, getSrcPath, setupVitePlugins } from "./build"

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as ImportMetaEnv
  const rootPath = getRootPath()
  const srcPath = getSrcPath()

  return {
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
      },
    },
    server: {
      host: "0.0.0.0",
      port: 8080,
      open: true,
    },
    plugins: setupVitePlugins(viteEnv),
  }
})
