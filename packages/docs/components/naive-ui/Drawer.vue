<template>
  <n-drawer
    v-model:show="visible"
    preset="dialog"
    title="确认"
    :on-after-leave="closed"
  >
    <n-drawer-content title="抽屉" closable>
      <div>{{ content }}</div>
      <n-space>
        <n-button @click="visible = false">内部关闭抽屉</n-button>
        <n-button @click="onSuccess">外部关闭抽屉</n-button>
      </n-space>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent, NSpace, NButton } from "naive-ui";
import { DialogComponent } from "@shilim-developer/vue-dialog-manager/lib/types/dialog";
import { usePropsVisible } from "@shilim-developer/vue-dialog-manager";
import { onMounted } from "vue";
type PropsType = {
  content: string;
  onSuccess: () => void;
} & DialogComponent.Props;
const props = defineProps<PropsType>();
const visible = usePropsVisible(props);
visible.value = false;
onMounted(() => {
  visible.value = true;
});

const closed = () => {
  props.onClosed();
};
</script>
