<script setup>
import { computed } from 'vue'
import { getSrc2 } from '../../../utils'
const props = defineProps({
  href: { type: String, required: true },
  fit: { type: Boolean, default: false },
  download: { type: String },
})

const href2 = computed(() => {
  return getSrc2(props.href, props.fit)
})
</script>

<template>
  <a :href="href2" :download="download">
    <slot></slot>
  </a>
</template>

<style lang="scss"></style>
