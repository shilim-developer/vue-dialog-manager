<template>
  <el-drawer :model-value="visible" title="抽屉" @closed="closed">
    <div>{{ content }}</div>
    <el-button @click="visible = false">内部关闭抽屉</el-button>
    <el-button @click="onSuccess">外部关闭抽屉</el-button>
  </el-drawer>
</template>

<script setup lang="ts">
import { ElDrawer, ElButton } from "element-plus";
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
