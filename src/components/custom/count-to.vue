<template>
  <span>
    {{ value }}
  </span>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect, onMounted } from "vue";
import { useTransition, TransitionPresets } from "@vueuse/core";
import { isNumber } from "@/utils";

defineOptions({ name: "CountTo" });

const props = defineProps({
  startValue: {
    type: Number,
    default: 0,
  },
  endValue: {
    type: Number,
    default: 2028,
  },
  duration: {
    type: Number,
    default: 1500,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  decimals: {
    type: Number,
    default: 0,
  },
  prefix: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
  separator: {
    type: String,
    default: "",
  },
  decimal: {
    type: String,
    default: ".",
  },
  useEasing: {
    type: Boolean,
    default: true,
  },
  transition: {
    type: String,
    default: "linear",
  },
});

const emits = defineEmits(["on-started", "on-finished"]);

const source = ref(props.startValue);
let outputValue = useTransition(source as number);

const value = computed(() => formatNumber(outputValue.value));

function formatNumber(num: number | string) {
  if (num !== 0 && !num) {
    return "";
  }
  const { decimals, decimal, separator, suffix, prefix } = props;
  let number = Number(num).toFixed(decimals);
  number = String(number);

  const x = number.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? decimal + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  if (separator && !isNumber(separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, `$1${separator}$2`);
    }
  }
  return prefix + x1 + x2 + suffix;
}

const disabled = ref(false);

function run() {
  outputValue = useTransition(source as number, {
    disabled,
    duration: props.duration,
    onStarted: () => emits("on-started"),
    onFinished: () => emits("on-finished"),
    ...(props.useEasing
      ? { transition: TransitionPresets[props.transition] }
      : {}),
  });
}

function start() {
  run();
  source.value = props.endValue;
}

watch([() => props.startValue, () => props.endValue], () => {
  if (props.autoplay) {
    start();
  }
});

watchEffect(() => {
  source.value = props.startValue;
});

onMounted(() => {
  if (props.autoplay) {
    start();
  }
});
</script>

<style scoped></style>
