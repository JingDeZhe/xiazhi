<template>
  <div class="munsell">
    <h4>色相环</h4>
    <div class="rounds">
      <div
        class="rounds-item"
        v-for="({ name, color }, index) in rounds"
        :key="name"
        :style="{ background: color, ...getPos(index) }"
        :class="{ active: name === currentColor.name }"
        @mouseenter=";(activeColor.color = color), (activeColor.name = name)"
        @mouseleave=";(activeColor.color = ''), (activeColor.name = '')"
        @click=";(currentColor.color = color), (currentColor.name = name)"
      ></div>
      <div
        class="rounds-center"
        :style="{ background: activeColor.color || currentColor.color }"
      >
        {{ activeColor.name || currentColor.name }}
      </div>
    </div>
    <h4>色板</h4>
    <div class="colors">
      <div
        v-for="(item, index) in currentColors"
        :key="index"
        class="colors-row"
      >
        <div
          class="colors-item"
          v-for="item2 in item"
          :key="item2"
          :style="{ background: item2.color }"
          :title="item2.name"
          @click="copyColor(item2.color)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import chroma from 'chroma-js'
import { computed, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { colors, rounds } from '../data/munsellData'

const activeColor = reactive({
  name: '',
  color: '',
})
const currentColor = reactive({
  name: '5R',
  color: '#F4083D',
})
const currentColors = computed(() => {
  return colors[currentColor.name] || []
})
function getPos(index) {
  const t = rounds.length
  return {
    top: Math.sin((index * 2 * Math.PI) / t) * 47 + 47 + '%',
    left: Math.cos((index * 2 * Math.PI) / t) * 47 + 47 + '%',
    transform: `rotate(${(360 / t) * index}deg)`,
  }
}
function copyColor(color) {
  color = chroma(color).hex()
  window.navigator.clipboard.writeText(color)
  ElMessage.success(`已复制颜色: ${color}`)
}
</script>

<style scoped>
.colors-row {
  display: flex;
}
.colors-item {
  width: 1.5em;
  height: 1.5em;
  margin: 5px;
  cursor: pointer;
}
.colors-item:hover {
  outline: 2px solid currentColor;
}
.rounds {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 20px 0;
  max-width: 100%;
}
.rounds-item {
  width: 6%;
  height: 6%;
  border-radius: 3px;
  position: absolute;
  cursor: pointer;
}
.rounds-item.active {
  outline: 2px solid var(--vt-c-text-1);
}
.rounds-center {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
}
</style>
