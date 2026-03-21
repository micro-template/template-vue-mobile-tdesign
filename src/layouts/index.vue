<script lang="ts" setup>
import {
  RouterView
} from "vue-router";

import {
  Icon
} from "@iconify/vue";

</script>
<template>
  <main>
    <header>头部</header>
    <content>
      <RouterView />
      <Icon icon="mdi-light:home" />
    </content>
    <footer>底部</footer>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

content {
  flex: 1;
}
</style>
