<template>
  <n-drawer
    v-model:show="show"
    preset="dialog"
    title="确认"
    :on-after-leave="closed"
  >
    <n-drawer-content title="抽屉" closable>
      <div>{{ content }}</div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent } from "naive-ui";
import { onMounted, ref } from "vue";
const props = defineProps<{
  visible: boolean;
  content: string;
}>();
const show = ref(false);
onMounted(() => {
  show.value = props.visible;
});

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const closed = () => {
  emit("closed");
};
</script>
