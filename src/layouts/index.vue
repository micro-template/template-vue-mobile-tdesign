<script lang="ts" setup>
import {
  RouterView
} from "vue-router";

import {
  Icon
} from "@iconify/vue";

import Header from "@/layouts/components/header/index.vue";
import Footer from "@/layouts/components/footer/index.vue";

</script>
<template>
  <main>
    <header>
      <Header />
    </header>
    <section>
      <RouterView />
      <Icon icon="mdi-light:home" />
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
