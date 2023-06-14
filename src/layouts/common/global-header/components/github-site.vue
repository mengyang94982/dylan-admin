<template>
  <hover-container
    tooltip-content="github"
    class="w-40px h-full"
    :inverted="theme.header.inverted"
    @click="handleClickLink"
  >
    <icon-mdi-github class="text-20px" />
  </hover-container>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store";

defineOptions({ name: "GithubSite" });
const theme = useThemeStore();

function handleClickLink() {
  window.open("www.baidu.com", "_blank");
}
</script>

<style scoped lang="less"></style>
