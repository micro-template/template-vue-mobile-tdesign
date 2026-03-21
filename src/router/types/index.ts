import {
  NavbarProps
} from "tdesign-mobile-vue";
import {
  VNode
} from "vue";
import {
  RouteComponent
} from "vue-router";

export interface IFooterMeta {
  value?: string;
  icon?: string;
}

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
    footer?: IFooterMeta;
  };
}
