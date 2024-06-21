<template>
  <n-modal
    v-model:show="show"
    preset="dialog"
    title="确认"
    :on-after-leave="closed"
  >
    <div>{{ content }}</div>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal } from "naive-ui";
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
