<template>
  <ElDialog :model-value="visible" title="弹窗" @closed="closed">
    <div>{{ content }}</div>
  </ElDialog>
</template>

<script setup lang="ts">
import { ElDialog } from "element-plus";
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
