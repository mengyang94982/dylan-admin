<template>
  <svg
    v-if="renderLocalIcon"
    aria-hidden="true"
    width="1em"
    height="1em"
    v-bind="bindAttrs"
  >
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
  <Icon v-if="icon && !renderLocalIcon" :icon="icon" v-bind="bindAttrs" />
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { Icon } from "@iconify/vue";

defineOptions({ name: "SvgIcon" });
/**
 * 图标组件
 * - 支持iconify和本地svg图标
 * - 同时传递了icon和localIcon，localIcon会优先渲染
 */
const props = defineProps({
  icon: {
    type: String,
  },
  localIcon: { type: String },
});

const attrs = useAttrs();

const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || "",
  style: (attrs.style as string) || "",
}));

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFFIX: preffix } = import.meta.env;

  const defaultLocalIcon = "no-icon";

  const icon = props.localIcon || defaultLocalIcon;

  return `#${preffix}-${icon}`;
});

/*渲染本地icon*/
const renderLocalIcon = computed(() => props.localIcon || !props.icon);
</script>

<style scoped lang="less"></style>
