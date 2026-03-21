<script setup lang="ts">
import {
  get,
  eq
} from "lodash-es";
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

const isTitleHidden = computed(() => !eq(get(meta.value, "hidden.title"), true));

</script>
<template>
  <Navbar v-if="isTitleHidden"
          :fixed="false"
          :left-arrow="false"
          :title="String(meta?.title ?? '')"
  />
</template>
