<script setup>
import { isAbsoluteUrl } from '../../../utils'
import { computed } from 'vue'
const props = defineProps({ src: { type: String, required: true } })

const src2 = computed(() => {
  if (isAbsoluteUrl(props.src)) return props.src
  return import.meta.env.PROD
    ? `https://jingdezhe.github.io/refer-1/${props.src}`
    : `http://localhost:5177/${props.src}`
})
</script>

<template>
  <iframe class="my-iframe" :src="src2" frameborder="0"></iframe>
</template>

<style lang="scss">
.my-iframe {
  width: 100%;
  display: block;
  margin: 1rem 0;
}
</style>
