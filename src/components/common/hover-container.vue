<template>
  <div v-if="showTooltip">
    <n-tooltip :placement="placement" trigger="hover">
      <template #trigger>
        <div
          class="flex-center h-full cursor-pointer dark:hover:bg-#333"
          :class="contentClassName"
        >
          <slot></slot>
        </div>
      </template>
    </n-tooltip>
  </div>
  <div
    v-else
    class="flex-center cursor-pointer dark:hover:bg-#333"
    :class="contentClassName"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PopoverPlacement } from "naive-ui";
import { showToolbar } from "vditor/dist/ts/toolbar/setToolbar";

defineOptions({ name: "HoverContainer" });

const props = defineProps({
  tooltipContent: {
    type: String,
    default: "",
  },
  placement: {
    type: String,
    default: "bottom",
  },
  contentClass: {
    type: String,
    default: "",
  },
  inverted: {
    type: Boolean,
    default: false,
  },
});
console.log(props.tooltipContent);
const showTooltip = computed(() => Boolean(props.tooltipContent));
console.log(showTooltip.value);

const contentClassName = computed(
  () =>
    `${props.contentClass} ${
      props.inverted ? "hover:bg-primary" : "hover:bg-#f6f6f6"
    }`
);
</script>

<style scoped></style>
