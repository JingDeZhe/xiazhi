<script setup>
import { computed, ref } from 'vue'

const index = ref('1')
const src = computed(() => {
  const t = index.value.toString().padStart(3, '0')
  return `https://store-1258290249.cos.ap-guangzhou.myqcloud.com/image/avatar/avatar-${t}.png`
})
</script>

<template>
  <div class="avatar-gallary space-y-2">
    <input type="range" min="1" max="199" step="1" v-model="index" />
    <div>序号：{{ index }}</div>
    <img class="rounded w-[200px]" :src="src" alt="avatar" />
  </div>
</template>

<style lang="scss"></style>
