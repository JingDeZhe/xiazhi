<template>
  <div id="colors">
    <div
      class="color_item"
      v-for="item in colorList"
      :key="item.name1"
      :style="{ background: item.hex, color: getTextColor(item.rgb) }"
      @click="copy(item.hex)"
    >
      {{ item.name0 }}
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { http, showTip } from '../../../../utils'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const colorList = reactive([])
onMounted(() => {
  http
    .get(props.src)
    .json()
    .then((data) => {
      colorList.push(...data)
    })
})

function getLightness([r, g, b]) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function getTextColor(rgb) {
  return getLightness(rgb) > 128 ? '#202020' : '#fff'
}

function copy(str) {
  window.navigator.clipboard.writeText(str)
  showTip(`已复制颜色：${str}`)
}
</script>

<style lang="scss">
#colors {
  display: flex;
  flex-wrap: wrap;
  .color_item {
    width: 70px;
    height: 200px;
    margin: 5px;
    writing-mode: tb-rl;
    text-align: center;
    line-height: 70px;
    font-family: SimSun, fangsong, serif;
    font-size: 20px;
    transition: transform 0.1s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
