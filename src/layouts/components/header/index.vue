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
  IRouteConfig
} from "@/router/types";

const route = useRoute();

const meta: ComputedRef<IRouteConfig["meta"]> = computed(() => route.meta);

</script>
<template>
  <Navbar v-if="meta?.hidden?.title"
          :fixed="false"
          :left-arrow="false"
          :title="String(meta?.title ?? '')"
  />
</template>
