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
