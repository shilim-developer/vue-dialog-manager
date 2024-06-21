---
outline: deep
---

# 演示

<demo-block>
  <ElementPlusExample/>
</demo-block>

### 演示代码
```vue
<template>
  <el-button type="primary" @click="openDialogManageDialog">
    打开弹窗
  </el-button>
  <el-button type="primary" @click="openDialogManageDrawer">
    打开抽屉
  </el-button>

  <DialogManager />
</template>

<script setup lang="ts">
import { createDialogManager } from "@shilim-developer/vue-dialog-manager";
import { ElButton } from "element-plus";
import Dialog from "./Dialog.vue";
import Drawer from "./Drawer.vue";

const DialogManager = createDialogManager();

const openDialogManageDialog = () => {
  const dialogKey = DialogManager.open(Dialog, {
    content: "这是一个弹窗",
    onSuccess: () => {
      DialogManager.close(dialogKey);
    },
  });
};

const openDialogManageDrawer = () => {
  const drawerKey = DialogManager.open(Drawer, {
    content: "这是一个抽屉",
    onSuccess: () => {
      DialogManager.close(drawerKey);
    },
  });
};
</script>
```

### Dialog.vue
```vue
<template>
  <el-dialog v-model="visible" title="弹窗" @closed="closed">
    <div>{{ content }}</div>
    <el-button @click="visible = false">内部关闭弹窗</el-button>
    <el-button @click="onSuccess">外部关闭弹窗</el-button>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElDialog, ElButton } from "element-plus";
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
```

### Drawer.vue
```vue
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
```