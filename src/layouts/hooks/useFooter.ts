import {
  filter,
  get,
  isObject,
  isString,
  trim
} from "lodash-es";
import {
  computed,
  ComputedRef
} from "vue";
import {
  RouteRecordRaw,
  useRouter
} from "vue-router";

import {
  IFooterMeta,
  IRouteConfig
} from "@/router/types";

export default function useFooter(): ComputedRef<IRouteConfig[]> {
  const router = useRouter();

  const _footer: ComputedRef<IRouteConfig[]> = computed(() => filter(router.options.routes, (item: RouteRecordRaw) => {
    const fUnknown = get(item, "meta.footer") as unknown;

    if (!isObject(fUnknown)) {
      return false;
    }

    const f = fUnknown as Partial<IFooterMeta>;

    const hasValue = isString(f.value) && trim(f.value).length > 0;

    const hasIcon = isString(f.icon) && trim(f.icon).length > 0;

    return hasValue || hasIcon;
  }).map((item: RouteRecordRaw) => {
    const {
      name: itemName
    } = item;

    let name = "";

    if (typeof itemName === "string") {
      name = itemName;
    } else if (itemName) {
      name = String(itemName);
    }

    return {
      ...(item as object),
      name
    } as IRouteConfig;
  }));

  return _footer;
}
