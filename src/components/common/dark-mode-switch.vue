<template>
  <div class="flex-center text-18px cursor-pointer" @click="handleSwitch">
    <icon-mdi-moon-waning-crescent v-if="darkMode" />
    <icon-mdi-white-balance-sunny v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "DarkModeSwitch" });
const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits([]);

const darkMode = computed({
  get() {
    return props.dark;
  },
  set(newValue: boolean) {
    emits("update:dark", newValue);
  },
});

function handleSwitch(event: MouseEvent) {
  console.log(event);
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 9999;
}

::view-transition-new(root) {
  z-index: 1;
}

.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 9999;
}
</style>
