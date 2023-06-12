<template>
  <div class="h-full">
    <iframe
      :src="src"
      class="wh-full"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const src = ref("https://v3.cn.vuejs.org/")
</script>

<style lang="less" scoped></style>
