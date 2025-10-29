<template>
  <component
    :is="tag"
    :class="[variantClass, props.class]"
    :style="{ color: colorName,fontFamily: 'Preahvihear, sans-serif',...props.style }"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'body',
  },
  color: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  style: {
    type: Object,
    default: () => ({}),
  },
})

// Tailwind base classes for text variants
const variantClasses = {
  h1: 'text-4xl font-bold leading-tight',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  subtitle: 'text-lg font-medium',
  body: 'text-base font-normal',
  caption: 'text-sm font-light tracking-wide',
}

const tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'h4',
  body: 'p',
  caption: 'span',
}

const variantClass = computed(() => variantClasses[props.variant] || variantClasses.body)
const tag = computed(() => tagMap[props.variant] || 'p')

// Color handling (default theme-aware)
const colorName = computed(() => {
  return props.color || 'white'
})
</script>
