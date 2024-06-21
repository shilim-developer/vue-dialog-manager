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
```

### Dialog.vue
```vue
<template>
  <n-modal
    v-model:show="show"
    preset="dialog"
    title="确认"
    :on-after-leave="closed"
  >
    <div>{{ content }}</div>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal } from "naive-ui";
import { onMounted, ref } from "vue";
const props = defineProps<{
  visible: boolean;
  content: string;
}>();
const show = ref(false);
onMounted(() => {
  show.value = props.visible;
});

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
  <n-drawer
    v-model:show="show"
    preset="dialog"
    title="确认"
    :on-after-leave="closed"
  >
    <n-drawer-content title="抽屉" closable>
      <div>{{ content }}</div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent } from "naive-ui";
import { onMounted, ref } from "vue";
const props = defineProps<{
  visible: boolean;
  content: string;
}>();
const show = ref(false);
onMounted(() => {
  show.value = props.visible;
});

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const closed = () => {
  emit("closed");
};
</script>
```