<script setup lang="ts">
import {
  Button
} from "tdesign-mobile-vue";

import {
  MessageShow
} from "../../src";

const handleClick = (): void => {
  MessageShow({
    content: "这是一个消息提示"
  });
};
</script>
<template>
  <div>
    <Button @click="handleClick">
      按钮
    </Button>
  </div>
</template>
<style scoped>
div {
  font-size: 16px;
}
</style>
