<script setup lang="ts">
import {
  Navbar,
  NavbarProps
} from "tdesign-mobile-vue";
import {
  computed,
  ComputedRef
} from "vue";
import {
  useRoute
} from "vue-router";
import {
  isObject,
  find
} from "lodash-es";
import {
  IRouteConfig
} from "@/router/types";

import {
  useFooter
} from "../../hooks";

const route = useRoute();

const meta: ComputedRef<IRouteConfig["meta"]> = computed(() => route.meta);

const isTitleHidden = computed(() => {

  if(!meta.value?.title) {
    return false;
  }

  return meta.value?.hidden?.title ?? true;
});

const footer = useFooter();

const options: ComputedRef<NavbarProps> = computed(() => {
  const title = meta.value?.title;

  const leftArrow = !find(footer.value, {
    path: route.path
  });

  let obj: NavbarProps;

  if (isObject(title) && !("component" in title)) {

    obj = {
      leftArrow,
      ...title
    };
  } else {

    obj = {
      title: String(title ?? ""),
      leftArrow
    };
  }

  return obj;
});

</script>
<template>
  <Navbar v-if="isTitleHidden"
          :fixed="options.fixed ?? false"
          :left-arrow="options.leftArrow ?? false"
          :title="String(options.title ?? '')"
  />
</template>
