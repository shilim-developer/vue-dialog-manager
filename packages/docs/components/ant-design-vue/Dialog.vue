<template>
  <a-modal v-model:open="open" title="弹窗" :after-close="closed">
    <div>{{ content }}</div>
  </a-modal>
</template>

<script setup lang="ts">
import { Modal as AModal } from "ant-design-vue";
import { ref } from "vue";
const props = defineProps<{
  visible: boolean;
  content: string;
}>();
const open = ref(props.visible);

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const closed = () => {
  emit("closed");
};
</script>
