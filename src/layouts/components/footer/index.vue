<script setup lang="ts">
import {
  TabBar,
  TabBarItem
} from "tdesign-mobile-vue";
import {
  ref,
  computed,
  ComputedRef,
  watchEffect
} from "vue";
import router from "@/router";
import {
  IRouteConfig
} from "@/router/types";
import {
  useRoute
} from "vue-router";
import {
  isBoolean
} from "lodash-es";
import {
  Icon
} from "@iconify/vue";

import {
  useFooter
} from "../../hooks";

import {
  isNonEmptyPlainObject
} from "../../utils";

const _footer: ComputedRef<IRouteConfig[]> = useFooter();

const value = ref(_footer.value[0]?.path ?? "");

const route = useRoute();

watchEffect(() => {
  value.value = route.path;
});

const isHidden = computed(() => {
  const meta = route.meta as IRouteConfig["meta"];

  const footer = meta?.footer;

  if(isNonEmptyPlainObject(footer)) {
    if(isBoolean(meta?.hidden?.footer)) {
      return meta?.hidden?.footer;
    }

    return true;
  }

  return meta?.hidden?.footer ?? false;
});
</script>

<template>
  <TabBar v-if="_footer.length && isHidden"
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
