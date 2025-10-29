<template>
  <button
    :style="buttonStyle"
    @click="$emit('click')"
    class="px-6 py-2 rounded-lg font-medium transition-all duration-300 text-center"
  >
    {{ props.title }}
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  variant: { type: String, default: "primary" }, // primary, outline, gradient
  color: { type: String, default: "#e99f51" },
  style: { type: String, default: "" },
});

const emit = defineEmits(["click"]);

const buttonStyle = computed(() => {
  switch (props.variant) {
    case "primary":
      return `background-color: ${props.color}; color: white; ${props.style}`;
    case "outline":
      return `border: 1px solid ${props.color}; color: ${props.color}; background: transparent; ${props.style}`;
    case "gradient":
      return `background: linear-gradient(90deg, ${props.color}, #ec4899, #facc15); color: white; ${props.style}`;
    default:
      return `${props.style}`;
  }
});
</script>
