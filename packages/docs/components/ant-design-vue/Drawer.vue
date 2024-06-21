<template>
  <a-drawer
    v-model:open="open"
    title="抽屉"
    @after-open-change="(open) => !open && closed()"
  >
    <div>{{ content }}</div>
  </a-drawer>
</template>

<script setup lang="ts">
import { Drawer as ADrawer } from "ant-design-vue";
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
