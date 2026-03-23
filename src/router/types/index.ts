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

  /**
   * 路由名称，必须唯一
   */
  name: string;
  component: RouteComponent;
  meta?: {
    title?: string | VNode | NavbarProps;
    hidden?: {

      /**
       * 是否隐藏标题栏，默认值为 false
       */
      title?: boolean;

      /**
       * 是否隐藏底部栏，默认值为 false
       */
      footer?: boolean;
    };
    footer?: IFooterMeta;

    /**
     * 是否启用 KeepAlive 缓存，默认值为 true
     */
    keepAlive?: boolean;
  };
}
