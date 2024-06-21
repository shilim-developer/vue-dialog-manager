---
outline: deep
---

# Examples

<demo-block>
  <NaiveUiExample/>
</demo-block>

### Example Code
```vue
<template>
  <n-space>
    <n-button type="primary" @click="openDialogManageDialog">
      打开弹窗
    </n-button>
    <n-button type="primary" @click="openDialogManageDrawer">
      打开抽屉
    </n-button>
  </n-space>

  <DialogManager />
</template>

<script setup lang="ts">
import { createDialogManager } from "@shilim-developer/vue-dialog-manager";
import { NSpace, NButton } from "naive-ui";
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
  <n-modal
    v-model:show="visible"
    preset="dialog"
    title="确认"
    :on-after-leave="closed"
  >
    <div>{{ content }}</div>
    <n-space>
      <n-button @click="visible = false">内部关闭弹窗</n-button>
      <n-button @click="onSuccess">外部关闭弹窗</n-button>
    </n-space>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal, NSpace, NButton } from "naive-ui";
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
```

### Drawer.vue
```vue
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
```