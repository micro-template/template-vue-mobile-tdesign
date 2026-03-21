<script lang="ts" setup>
import {
  Button
} from "tdesign-mobile-vue";
import {
  useRouter
} from "vue-router";

const router = useRouter();

const handleClick = () => {
  router.push("/home/1/detail");
};
</script>
<template>
  <div>
    首页

    <Button @click="handleClick">
      首页按钮
    </Button>
  </div>
</template>
