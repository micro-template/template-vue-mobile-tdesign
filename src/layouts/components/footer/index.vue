<script setup lang="ts">
import {
  TabBar,
  TabBarItem
} from "tdesign-mobile-vue";
import {
  ref
} from "vue";

const value = ref("label_1");

const list = ref([
  {
    value: "label_1",
    label: "首页",
    icon: "home"
  },
  {
    value: "label_2",
    label: "应用",
    icon: "app"
  },
  {
    value: "label_3",
    label: "聊天",
    icon: "chat"
  },
  {
    value: "label_4",
    label: "我的",
    icon: "user"
  }
]);
</script>

<template>
  <TabBar v-model="value"
          theme="tag"
          :fixed="false"
          :split="false"
  >
    <TabBarItem v-for="item in list"
                :key="item.value"
                :value="item.value"
    >
      {{ item.label }}
      <template #icon>
        111
      </template>
    </TabBarItem>
  </TabBar>
</template>
