<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { _picture } from './preData'
import { uid } from '@/utils'

const picture = ref(_picture)

const tmpFragmentPoints = ref([])
const activeFragment = ref(null)

const getPoints = (fragment) => {
  return fragment.points.map((v) => v.join(',')).join(' ')
}

const canvas = ref()

const map100 = (x1, x2, len) => ((x1 - x2) / len) * 100

const handleCanvasClick = (e) => {
  activeFragment.value = null
  const { x, y, width: sl } = canvas.value.getBoundingClientRect()
  const { x: mx, y: my } = e

  if (tmpFragmentPoints.value.length < 3) {
    tmpFragmentPoints.value.push([map100(mx, x, sl), map100(my, y, sl)])
    if (tmpFragmentPoints.value.length === 3) {
      picture.value.fragments.push({
        id: uid(),
        fill: '#292C34',
        points: [...tmpFragmentPoints.value.splice(0)],
      })
    }
  }
}

const handleSelectFragment = (e) => {
  if (tmpFragmentPoints.value.length !== 0) {
  } else {
    const { id } = e.target.dataset
    const index = picture.value.fragments.findIndex((v) => v.id === id)
    if (index !== -1) {
      const t = picture.value.fragments.splice(index, 1)[0]
      picture.value.fragments.push(t)
      activeFragment.value = t
    }
    e.stopPropagation()
  }
}

const px1v = ref(1)
onMounted(() => {
  nextTick(() => {
    const { width } = canvas.value.getBoundingClientRect()
    px1v.value = 100 / width
    canvas.value.style.setProperty('--px1v', px1v.value)
  })
})
</script>

<template>
  <div class="fragment-puzzle-01">
    <svg viewBox="0 0 100 100" @click="handleCanvasClick" ref="canvas">
      <polygon
        v-for="p in picture.fragments"
        :points="getPoints(p)"
        :fill="p.fill"
        @click="handleSelectFragment"
        :data-id="p.id"
        :class="{ active: activeFragment === p }"
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
    --px1v: 1px;
    width: 100%;
    height: 100%;

    polygon {
      &.active {
        stroke-width: calc(2 * var(--px1v));
        stroke: #303030;
      }
    }
  }
}
</style>
