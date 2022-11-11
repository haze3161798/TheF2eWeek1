<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted } from "vue"
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const se4Background = gsap.timeline({
    scrollTrigger: {
      trigger: "#se4-container",
      scrub: true,
      start: "top 0%",
      end: "top -200%",
    },
  })
  se4Background
    .to("#se4-container", {
      backgroundColor: "#CC4F36",
    })
    .to("#se4-container", {
      backgroundColor: "#FFB3A4",
    })
  const se4Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#se4-container",
      scrub: true,
      start: "top 0%",
      pin: true,
      end: "top -200%",
    },
  })
  se4Tl
    .to("#se4l1", {
      yPercent: 50,
    })
    .to("#se4l3-left", {
      yPercent: 50,
    })
    .to("#se4l2-right", {
      yPercent: 40,
    })
    .to("#se4-text", {
      zIndex: 40,
    })
})
</script>
<template>
  <div>
    <div
      id="se4-container"
      class="h-screen relative flex items-end overflow-hidden"
    >
      <div class="absolute inset-0 flex items-center justify-center flex-col">
        <div
          class="text-7xl relative z-40 border-white border-2 px-24 py-9 lg:px-26 lg:py-10"
        >
          互動式網頁設計
        </div>
        <div id="se4-text" class="relative text-2xl py-4">
          UI、前端接力合作，一同產出完整作品。
        </div>
      </div>
      <div class="relative z-30">
        <img src="@/assets/img/se4L4.svg" alt="" />
      </div>
      <div id="se4l3-left" class="absolute bottom-0 z-20">
        <img src="@/assets/img/se4L3.svg" alt="" />
      </div>
      <div id="se4l2-right" class="absolute bottom-0 right-0 z-10">
        <img src="@/assets/img/se4L2.svg" alt="" />
      </div>
      <div id="se4l1" class="absolute bottom-1/4">
        <img src="@/assets/img/se4L1.svg" alt="" />
      </div>
    </div>
  </div>
</template>
