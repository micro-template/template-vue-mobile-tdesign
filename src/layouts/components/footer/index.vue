<script setup lang="ts">
import {
  TabBar,
  TabBarItem
} from "tdesign-mobile-vue";
import {
  ref,
  ComputedRef,
  computed,
  watchEffect
} from "vue";
import router from "@/router";
import {
  IFooterMeta,
  IRouteConfig
} from "@/router/types";
import {
  RouteRecordRaw,
  useRoute
} from "vue-router";
import {
  filter,
  get,
  isObject,
  isString,
  trim
} from "lodash-es";
import {
  Icon
} from "@iconify/vue";

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

const value = ref(_footer.value[0]?.path ?? "");

const route = useRoute();

watchEffect(() => {
  value.value = route.path;
});
</script>

<template>
  <TabBar v-if="_footer.length"
          v-model="value"
          theme="tag"
          :fixed="false"
          :split="false"
  >
    <TabBarItem v-for="item in _footer"
                :key="item.path"
                :value="item.path"
                @click="() => router.replace(item.path)"
    >
      {{ item.meta?.footer?.value }}
      <template #icon>
        <Icon :icon="item.meta?.footer?.icon ?? ''" />
      </template>
    </TabBarItem>
  </TabBar>
</template>
