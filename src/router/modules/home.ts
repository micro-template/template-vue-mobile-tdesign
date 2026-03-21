import {
  IRouteConfig
} from "../types";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
      footer: {
        value: "首页",
        icon: "mdi-light:home"
      },
      hidden: {
        footer: true
      }
    }
  },
  {
    path: "/home/:id/detail",
    name: "home-detail",
    component: () => import("@/views/home-detail/index.vue"),
    meta: {
      title: "首页详情"
    }
  }
] satisfies IRouteConfig[];
