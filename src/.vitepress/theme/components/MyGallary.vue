<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { getStoreUrl } from '@/utils'

const ctn = ref()
const props = defineProps({
  prefix: { type: String, default: 'dcim' },
  imgs: { type: Array, default: () => [] },
})

const list = ref([])

let gallary
onMounted(() => {
  if (!import.meta.env.SSR) {
    import(
      'https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.3.0/js/glightbox.min.js'
    ).then(() => {
      list.value = props.imgs.map((v) => {
        return {
          full: getStoreUrl(`${props.prefix}/full/${v.href}`),
          min: getStoreUrl(`${props.prefix}/min/${v.href}`),
        }
      })
      nextTick(() => {
        gallary = GLightbox({
          loop: true,
        })
      })
    })
  }
})

onUnmounted(() => {
  gallary?.destroy()
})
</script>

<template>
  <div class="glightbox-ctn">
    <a v-for="v in list" :href="v.full" class="glightbox">
      <img :src="v.min" :alt="v.alt" />
    </a>
  </div>
</template>

<style lang="scss">
.glightbox-ctn {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, 300px);
  img {
    width: 100%;
  }
}
</style>
