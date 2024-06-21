<template>
  <component
    :is="item.component"
    v-bind="item.props"
    v-for="(item, key) in componentStore"
    :key="key"
  ></component>
</template>

<script lang="ts" setup>
import type { ComponentStore } from "@/hooks/create-dialog-manager";
import type { Component } from "vue";

defineProps<{
  componentStore: { [key: string]: ComponentStore<Component> };
}>();
</script>
