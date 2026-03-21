import {
  IRouteConfig
} from "../types";

export default [
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/index.vue"),
    meta: {
      footer: {
        value: "我的",
        icon: "ic:baseline-accessibility"
      }
    }
  }
] satisfies IRouteConfig[];
