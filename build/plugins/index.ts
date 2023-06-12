import type { PluginOption } from "vite"
import unocss from "@unocss/vite"
import vue from "@vitejs/plugin-vue"
import unplugin from "./unplugin"

import pageRoute from "@soybeanjs/vite-plugin-vue-page-route"

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */

export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [vue({}), ...unplugin(viteEnv), unocss()]

  if (viteEnv.VITE_SOYBEAN_ROUTE_PLUGIN === "Y") {
    plugins.push(pageRoute())
  }
  return plugins
}
