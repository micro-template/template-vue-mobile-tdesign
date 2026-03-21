<script setup lang="ts">
import {
  Button,
  Message
} from "tdesign-mobile-vue";

const handleClick = () => {
  Message.error({
    content: "这是一个消息提示",
    options: {
      duration: 3000
    }
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
