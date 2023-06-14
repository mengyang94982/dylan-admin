<template>
  <n-space :vertical="true" :size="16">
    <top-chart />
    <!--<data-card />-->
    <!--<bottom-part />-->
  </n-space>
</template>

<script setup lang="ts">
import { BottomPart, DataCard, TopChart } from "./components";
</script>

<style scoped lang="less"></style>
