import {
  NavbarProps
} from "tdesign-mobile-vue";
import {
  VNode
} from "vue";
import {
  RouteComponent
} from "vue-router";

export interface IRouteConfig {
  path: string;
  name: string;
  component: RouteComponent;
  meta?: {
    title?: string | VNode;
    hidden?: {
      title?: boolean | NavbarProps;
      footer?: boolean;
    };
    footer?: {
      value?: string;
      icon?: string;
    };
  };
}
