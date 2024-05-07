<script setup>
import { ref } from 'vue'

const fragments = ref([])

const tmpFragment = ref([])
const activeFragment = ref(null)
</script>

<template>
  <div class="fragment-puzzle">
    <svg width="300px" height="300px" viewBox="0 0 100 100"></svg>
  </div>
</template>

<style lang="scss"></style>
