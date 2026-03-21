import {
  IRouteConfig
} from "../types";

export default [
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/index.vue")
  }
] satisfies IRouteConfig[];
