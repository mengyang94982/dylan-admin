<template>
  <router-link :to="routeHomePath" class="flex-center w-full nowrap-hidden">
    <system-logo class="text-32px text-primary" />
    <h2
      v-show="showTitle"
      class="pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"
    >
      {{ t("message.system.title") }}
    </h2>
  </router-link>
</template>

<script setup lang="ts">
import { t } from "@/locales";
import { routePath } from "@/router";

defineOptions({ name: "GlobalLogo" });

defineProps({
  showTitle: {
    type: Boolean,
    required: true,
  },
});
const routeHomePath = routePath("root");
</script>

<style scoped lang="less"></style>
