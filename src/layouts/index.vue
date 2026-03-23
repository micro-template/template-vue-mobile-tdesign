<script lang="ts" setup>
import {
  computed
} from "vue";
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

const options = computed(() => {
  const {
    routes
  } = router.options;

  const exclude = map(filter(routes, route => route.meta?.keepAlive === false));

  const include = filter(routes, route => route.meta?.keepAlive === true || route.meta?.keepAlive === undefined);

  const excludeNames = map(exclude, route => route.name).filter(Boolean) as string[];

  const includeNames = map(include, route => route.name).filter(Boolean) as string[];

  return {
    excludeNames,
    includeNames
  };
});

</script>
<template>
  <main>
    <header>
      <Header />
    </header>
    <section>
      <RouterView v-slot="{ Component }">
        <KeepAlive :exclude="options.excludeNames"
                   :include="options.includeNames"
        >
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
