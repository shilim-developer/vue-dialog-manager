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
