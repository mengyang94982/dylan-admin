import type { PluginOption } from "vite"
import unocss from "@unocss/vite"
import vue from "@vitejs/plugin-vue"
import unplugin from "./unplugin"

export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [vue({}), ...unplugin(viteEnv), unocss()]

  return plugins
}
