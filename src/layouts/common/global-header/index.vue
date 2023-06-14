<template>
  <dark-mode-container
    class="global-header flex-y-center h-full"
    :inverted="theme.header.inverted"
  >
    <global-logo
      v-if="headerProps.shwoLogo"
      :show-title="true"
      class="h-full"
      :style="{ width: theme.sider.width + 'px' }"
    />
    <div v-if="!headerProps.showHeaderMenu" class="flex-1-hidden">
      <menu-collapse v-if="!headerProps.showMenuCollapse || isMobile" />
      <global-breadcrumb v-if="theme.header.crumb.visible && !isMobile" />
    </div>
    <header-menu v-else />
    <div class="flex justify-end h-full">
      <global-search />
      <github-site />
      <full-screen />
      <theme-mode />
      <toggle-lang />
      <system-message />
      <setting-button v-if="showButton" />
      <user-avatar />
    </div>
  </dark-mode-container>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store";
import { useBasicLayout } from "@/composables";
import GlobalLogo from "../global-logo/index.vue";
import GlobalSearch from "../global-search/index.vue";
import {
  FullScreen,
  GithubSite,
  GlobalBreadcrumb,
  HeaderMenu,
  MenuCollapse,
  SettingButton,
  SystemMessage,
  ThemeMode,
  UserAvatar,
  ToggleLang,
} from "./components";

defineProps({
  headerProps: { type: Object },
});

const theme = useThemeStore();
console.log(theme.sider);
const { isMobile } = useBasicLayout();

const showButton = import.meta.env.PROD && import.meta.env.VITE_VERCEL !== "Y";
</script>

<style scoped>
.global-header {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
