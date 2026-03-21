<script lang="ts" setup>
import {
  RouterView
} from "vue-router";
</script>
<template>
  <main>
    <header>头部</header>
    <content>
      <RouterView />
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
