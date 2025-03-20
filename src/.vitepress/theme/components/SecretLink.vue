<script setup>
import { useRouter } from 'vitepress'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { emojiFall } from './libs/rainFall'
import { showAlertInput, showTip } from '../../../utils/index'

const props = defineProps({
  srt: { type: String, required: true },
  url: { type: String, required: true },
  question: { type: String },
  answer: { type: String },
  wrongText: { type: String, default: '答错了' },
})

const isSrtMatch = computed(() => {
  const srt = new URLSearchParams(window.location.search).get('srt')
  return props.srt === srt
})

const router = useRouter()
const refAnchor = ref(null)

onMounted(() => {
  if (isSrtMatch.value) {
    const effect = emojiFall({
      emoji: ['🍎', '🌟', '🍏', '⭐'],
      delay: 300, // 每500ms生成一次
      anchor: refAnchor.value,
    })

    onUnmounted(() => {
      effect.destroy()
    })
  }
})

const secretOpen = () => {
  if (!isSrtMatch.value) return
  checkQuestion().then((ok) => {
    if (ok) router.go(props.url)
    else showTip(props.wrongText)
  })
}

const checkQuestion = async () => {
  if (!props.question) return true
  const text = await showAlertInput(props.question)
  return text === props.answer
}
</script>

<template>
  <span @click="secretOpen" ref="refAnchor">
    <slot></slot>
  </span>
</template>

<style lang="scss"></style>
