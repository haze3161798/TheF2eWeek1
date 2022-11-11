<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { onMounted } from "vue"
gsap.registerPlugin(ScrollTrigger, TextPlugin)
onMounted(() => {
  gsap.to("#loading", {
    text: "Loading...",
    duration: 2,
    repeat: -1,
  })
})
</script>
<template>
  <div
    class="bg-black w-100 h-screen fixed inset-0 z-50 flex items-center justify-center"
  >
    <div>
      <div id="loading" class="pb-10 text-center text-4xl h-9"></div>
      <img class="w-40" src="@/assets/img/tank-side.gif" alt="" />
    </div>
  </div>
</template>
