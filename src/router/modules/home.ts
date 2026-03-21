import {
  IRouteConfig
} from "../types";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue")
  }
] satisfies IRouteConfig;
