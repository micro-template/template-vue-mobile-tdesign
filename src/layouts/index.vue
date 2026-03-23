<script lang="ts" setup>

import {
  RouterView,
  useRouter
} from "vue-router";
import {
  filter,
  map
} from "lodash-es";

import Header from "@/layouts/components/header/index.vue";
import Footer from "@/layouts/components/footer/index.vue";

const router = useRouter();

const {
  routes
} = router.options;

const includeRoutes = filter(routes, route => route.meta?.keepAlive === true || route.meta?.keepAlive === undefined);

const includeNames = map(includeRoutes, route => route.name).filter(Boolean) as string[];

</script>

<template>
  <main>
    <header>
      <Header />
    </header>
    <section>
      <RouterView v-slot="{ Component }">
        <KeepAlive :include="includeNames">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </section>
    <footer>
      <Footer />
    </footer>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

section {
  flex: 1;
}
</style>
