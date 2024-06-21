---
outline: deep
---

# Examples

<demo-block>
  <AntDesignVueExample/>
</demo-block>

### Example Code
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
  <a-modal v-model:open="open" title="弹窗" :after-close="closed">
    <div>{{ content }}</div>
  </a-modal>
</template>

<script setup lang="ts">
import { Modal as AModal } from "ant-design-vue";
import { ref } from "vue";
const props = defineProps<{
  visible: boolean;
  content: string;
}>();
const open = ref(props.visible);

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
  <a-drawer
    v-model:open="open"
    title="抽屉"
    @after-open-change="(open) => !open && closed()"
  >
    <div>{{ content }}</div>
  </a-drawer>
</template>

<script setup lang="ts">
import { Drawer as ADrawer } from "ant-design-vue";
import { ref } from "vue";
const props = defineProps<{
  visible: boolean;
  content: string;
}>();
const open = ref(props.visible);

const emit = defineEmits<{
  (event: "closed"): void;
}>();

const closed = () => {
  emit("closed");
};
</script>
```