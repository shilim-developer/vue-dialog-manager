<template>
  <ElDrawer :model-value="visible" title="抽屉" @closed="closed">
    <div>{{ content }}</div>
  </ElDrawer>
</template>

<script setup lang="ts">
import { ElDrawer } from "element-plus";
defineProps<{
  visible: boolean;
  content: string;
}>();

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const closed = () => {
  emit("closed");
};
</script>
