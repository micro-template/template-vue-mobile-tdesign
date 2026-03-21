import {
  Component
} from "vue";

export interface IRouteConfig {
  path: string;
  name: string;
  component: Component;
}
