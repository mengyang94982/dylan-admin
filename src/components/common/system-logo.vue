<template>
  <icon-local-logo-fill v-if="fill" />
  <icon-local-logo v-else />
</template>

<script setup lang="ts">
defineOptions({ name: "SystemLogo" })
defineProps({
  fill: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="less" scoped></style>
