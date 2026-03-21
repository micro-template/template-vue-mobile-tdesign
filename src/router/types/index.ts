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

      /**
       * 是否隐藏标题栏，默认值为 false
       */
      title?: boolean | NavbarProps;

      /**
       * 是否隐藏底部栏，默认值为 false
       */
      footer?: boolean;
    };
    footer?: IFooterMeta;
  };
}
