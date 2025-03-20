<script setup>
import { useRouter } from 'vitepress'

const props = defineProps({
  srt: { type: String, required: true },
  url: { type: String, required: true }
})

const handleGo = () => {
  secretOpen(props.srt, props.url)
}

const router = useRouter()
const secretOpen = (prefix, url) => {
  const srt = new URLSearchParams(window.location.search).get('srt')
  console.log(srt, prefix, url)
  if (srt !== prefix) return
  router.go(url)
}
</script>

<template>
  <span @click="handleGo">
    <slot></slot>
  </span>
</template>

<style lang="scss"></style>