<script setup>
import { computed, ref } from 'vue'
import { _picture } from './preData'

const picture = ref(_picture)

const tmpFragmentPoints = ref([])
const activeFragment = ref(null)

const getPoints = (fragment) => {
  return fragment.points.map((v) => v.join(',')).join(' ')
}

const canvas = ref()

const map100 = (x1, x2, len) => ((x1 - x2) / len) * 100

const handleCanvasClick = (e) => {
  const { x, y, width, height } = canvas.value.getBoundingClientRect()
  const { x: mx, y: my } = e

  if (tmpFragmentPoints.value.length < 3) {
    tmpFragmentPoints.value.push([map100(mx, x, width), map100(my, y, height)])
    if (tmpFragmentPoints.value.length === 3) {
      picture.value.fragments.push({
        fill: '#292C34',
        points: [...tmpFragmentPoints.value.splice(0)],
      })
    }
  }
}

const handleSelectFragment = (e) => {
  console.log(e.target)
}
</script>

<template>
  <div class="fragment-puzzle-01">
    <svg viewBox="0 0 100 100" @click="handleCanvasClick" ref="canvas">
      <polygon
        v-for="p in picture.fragments"
        :points="getPoints(p)"
        :fill="p.fill"
        @click.stop="handleSelectFragment"
      ></polygon>
      <circle
        v-for="c in tmpFragmentPoints"
        :cx="c[0]"
        :cy="c[1]"
        r="1"
        fill="#292C3430"
      ></circle>
    </svg>
  </div>
</template>

<style lang="scss">
.fragment-puzzle-01 {
  background-color: #eee;
  aspect-ratio: 1/1;
  border-radius: 3px;
  overflow: hidden;

  > svg {
    width: 100%;
    height: 100%;
  }
}
</style>
