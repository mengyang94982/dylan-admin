<template>
  <div
    class="p-16px rounded-16px text-white"
    :style="{ backgroundImage: gradientStyle }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  startColor: {
    type: String,
    default: "#56cdf3",
  },
  endColor: {
    type: String,
    default: "#719de3",
  },
});

const gradientStyle = computed(
  () =>
    `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`
);
</script>

<style scoped></style>
