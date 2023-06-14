<template>
  <div class="dark:bg-dark dark:text-white dark:text-opacity-82 transition-all">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  inverted: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="less"></style>
