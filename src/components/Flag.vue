<script setup>
import { ref, onMounted } from "vue"
const flagIndex = ref(1)
const setFlagIndex = () => {
  setInterval(() => {
    if (flagIndex.value < 4) {
      flagIndex.value = flagIndex.value + 1
    } else {
      flagIndex.value = 1
    }
  }, 200)
}
onMounted(() => {
  setFlagIndex()
})
</script>
<template>
  <div>
    <img v-if="flagIndex === 1" src="@/assets/img/flag-anim/F1.svg" alt="" />
    <img v-if="flagIndex === 2" src="@/assets/img/flag-anim/F2.svg" alt="" />
    <img v-if="flagIndex === 3" src="@/assets/img/flag-anim/F3.svg" alt="" />
    <img v-if="flagIndex === 4" src="@/assets/img/flag-anim/F4.svg" alt="" />
  </div>
</template>
