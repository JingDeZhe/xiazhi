<script setup>
import { computed, ref } from 'vue'

const index = ref('1')
const src = computed(() => {
  const t = index.value.toString().padStart(3, '0')
  return `https://store-1258290249.cos.ap-guangzhou.myqcloud.com/image/avatar/avatar-${t}.png`
})
</script>

<template>
  <div>
    <input type="number" v-model="index" />
    <img :src="src" alt="avatar" />
  </div>
</template>

<style lang="scss"></style>
