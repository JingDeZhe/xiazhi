<script setup>
import { onMounted, ref } from 'vue'
import GLightbox from 'glightbox'

const ctn = ref()
const props = defineProps({
  imgs: { type: Array, default: () => [] },
})

let gallary
onMounted(() => {
  gallary = new GLightbox({
    selector: ctn.value,
    elements: imgs,
  })
})
</script>

<template>
  <div ref="ctn"></div>
</template>

<style lang="scss"></style>
