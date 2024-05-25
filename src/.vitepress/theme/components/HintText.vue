<script setup>
defineProps({
  position: { type: String, default: 'bottom' },
  title: { type: String },
  tag: { type: String },
})
</script>

<template>
  <span class="hint-text" :class="`hint--${position}`" :aria-label="title">
    <slot></slot>
    <sup>{{ tag }}</sup>
  </span>
</template>

<style>
.hint-text sup {
  margin-left: 0.2rem;
  color: var(--vp-c-warning-1);
}
</style>
