<script setup>
import { ref } from 'vue'

const fragments = ref([])

const tmpFragmentPoints = ref([])
const activeFragment = ref(null)

const getPoints = (fragment) => {
  return fragment.points
}
</script>

<template>
  <div class="fragment-puzzle-01">
    <svg width="300px" height="300px" viewBox="0 0 100 100">
      <polygon v-for="p in fragments" :points="getPoints(p)"></polygon>
    </svg>
  </div>
</template>

<style lang="scss">
.fragment-puzzle-01 {
  background-color: #eee;
  aspect-ratio: 1/1;
  border-radius: 3px;
  overflow: hidden;
}
</style>
