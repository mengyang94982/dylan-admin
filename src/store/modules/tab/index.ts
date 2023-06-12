// import type { RouteLocationNormalizedLoaded, Router } from "vue-router"

import { defineStore } from "pinia"

interface TabState {
  /** 多页签数据 */
  tabs: App.GlobalTabRoute[]
  /** 多页签首页 */
  homeTab: App.GlobalTabRoute
  /** 当前激活状态的页签(路由fullPath) */
  activeTab: string
}

export const useTabStore = defineStore("tab-store", {
  state: (): TabState => ({
    tabs: [],
    homeTab: {
      name: "root",
      fullPath: "/",
      meta: {
        title: "Root",
      },
      scrollPosition: {
        left: 0,
        top: 0,
      },
    },
    activeTab: "",
  }),
  actions: {
    /**
     * 获取tab滚动位置
     * @param fullPath - 路由fullPath
     */
    getTabScrollPosition(fullPath: string) {
      const position = {
        left: 0,
        top: 0,
      }
      // const index = getIndexInTabRoutes(this.tabs, fullPath)
      // if (index > -1) {
      //   Object.assign(position, this.tabs[index].scrollPosition)
      // }
      return position
    },
    /**
     * 记录tab滚动位置
     * @param fullPath - 路由fullPath
     * @param position - tab当前页的滚动位置
     */
    recordTabScrollPosition(
      fullPath: string,
      position: { left: number; top: number }
    ) {
      const index = 1
      if (index > -1) {
        this.tabs[index].scrollPosition = position
      }
    },
  },
})
