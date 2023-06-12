import { getLoginModuleRegExp } from "@/utils"

/** 根路由: / */

export const ROOT_ROUTE: AuthRoute.Route = {
  name: "root",
  path: "/",
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
  meta: {
    title: "Root",
  },
}

/** 固定的路由 */
export const constantRoutes: AuthRoute.Route[] = [
  ROOT_ROUTE,
  {
    name: "login",
    path: "/login",
    component: "self",
    props: (route) => {
      console.log(route)

      const moduleType =
        (route.params.module as UnionKey.LoginModule) || "pwd-login"
      return {
        module: moduleType,
      }
    },
    meta: {
      title: "登录",
      dynamicPath: `/login/:module(${getLoginModuleRegExp()})?`,
      singleLayout: "blank",
    },
  },
]
