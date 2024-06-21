<template>
  <a-drawer
    v-model:open="visible"
    title="抽屉"
    @after-open-change="(open) => !open && closed()"
  >
    <div>{{ content }}</div>
    <a-space>
      <a-button @click="visible = false">内部关闭抽屉</a-button>
      <a-button @click="onSuccess">外部关闭抽屉</a-button>
    </a-space>
  </a-drawer>
</template>

<script setup lang="ts">
import {
  Drawer as ADrawer,
  Space as ASpace,
  Button as AButton,
} from "ant-design-vue";
import { DialogComponent } from "@shilim-developer/vue-dialog-manager/lib/types/dialog";
import { usePropsVisible } from "@shilim-developer/vue-dialog-manager";
type PropsType = {
  content: string;
  onSuccess: () => void;
} & DialogComponent.Props;
const props = defineProps<PropsType>();
const visible = usePropsVisible(props);

const closed = () => {
  props.onClosed();
};
</script>
