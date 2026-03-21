<script setup lang="ts">
import {
  Navbar
} from "tdesign-mobile-vue";
import {
  computed,
  ComputedRef
} from "vue";
import {
  useRoute
} from "vue-router";
import {
  isObject
} from "lodash-es";
import {
  IRouteConfig
} from "@/router/types";

const route = useRoute();

const meta: ComputedRef<IRouteConfig["meta"]> = computed(() => route.meta);

const isTitleHidden = computed(() => meta.value?.hidden?.title ?? true);

const options = computed(() => {
  if(isObject(meta.value?.title)) {
    return meta.value?.title;
  }

  return {
    title: String(meta.value?.title ?? "")
  };
});

</script>
<template>
  <Navbar v-if="isTitleHidden"
          :fixed="false"
          :left-arrow="false"
          :title="String(options?.title ?? '')"
  />
</template>
