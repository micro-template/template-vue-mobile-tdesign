import {
  RouteComponent
} from "vue-router";

export interface IRouteConfig {
  path: string;
  name: string;
  component: RouteComponent;
  meta?: {
    title?: string;
    hidden?: {
      title?: boolean;
      footer?: boolean;
    };
    footer?: {
      value?: string;
      icon?: string;
    };
  };
}
