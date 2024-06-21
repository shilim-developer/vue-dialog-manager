---
outline: deep
---

# Examples

<demo-block>
  <ElementPlusExample/>
</demo-block>

### Example Code
```vue
<template>
  <el-button type="primary" @click="openDialogManageDialog">
    打开弹窗
  </el-button>

  <DialogManager />
</template>

<script setup lang="ts">
import { createDialogManager } from "@shilim-developer/vue-dialog-manager";
import Dialog from "./Dialog.vue";

const DialogManager = createDialogManager();

const openDialogManageDialog = () => {
  DialogManager.open(Dialog, {
    content: "这是一个弹窗",
    class: "test",
  });
};
</script>
```

### Dialog.vue
```vue
<template>
  <ElDialog :model-value="visible" title="dialogManagerDialog" @closed="closed">
    <div>{{ content }}</div>
    <ElInput v-model="inputValue"></ElInput>
  </ElDialog>
</template>

<script setup lang="ts">
import { ElDialog, ElInput } from "element-plus";
import { ref } from "vue";
defineProps<{
  visible: boolean;
  content: string;
}>();

const inputValue = ref("");

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const closed = () => {
  emit("closed");
};
</script>
```

### Drawer.vue
```vue
<template>
  <ElDrawer :model-value="visible" title="抽屉" @closed="closed">
    <div>{{ content }}</div>
  </ElDrawer>
</template>

<script setup lang="ts">
import { ElDrawer } from "element-plus";
defineProps<{
  visible: boolean;
  content: string;
}>();

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const closed = () => {
  emit("closed");
};
</script>
```