---
outline: deep
---

# 演示

<demo-block>
  <AntDesignVueExample/>
</demo-block>

### 演示代码
```vue
<template>
  <a-space>
    <a-button type="primary" @click="openDialogManageDialog">
      打开弹窗
    </a-button>
    <a-button type="primary" @click="openDialogManageDrawer">
      打开抽屉
    </a-button>
  </a-space>

  <DialogManager />
</template>

<script setup lang="ts">
import { createDialogManager } from "@shilim-developer/vue-dialog-manager";
import { Button as AButton, Space as ASpace } from "ant-design-vue";
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
  <a-modal v-model:open="visible" title="弹窗" :after-close="closed">
    <div>{{ content }}</div>
    <a-space>
      <a-button @click="visible = false">内部关闭弹窗</a-button>
      <a-button @click="onSuccess">外部关闭弹窗</a-button>
    </a-space>
  </a-modal>
</template>

<script setup lang="ts">
import {
  Modal as AModal,
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
```

### Drawer.vue
```vue
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
```