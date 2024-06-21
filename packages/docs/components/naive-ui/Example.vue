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
  DialogManager.open(Dialog, {
    content: "这是一个弹窗",
  });
};

const openDialogManageDrawer = () => {
  DialogManager.open(Drawer, {
    content: "这是一个抽屉",
  });
};
</script>
