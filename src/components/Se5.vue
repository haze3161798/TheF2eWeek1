<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted } from "vue"
import Flag from "./Flag.vue"
import { useLoadingStore } from "@/stores/loading"
const loadingStore = useLoadingStore()
const getUrl = (type) => {
  switch (true) {
    case type === 1:
      return "https://2022.thef2e.com/news/week1"
    case type === 2:
      return "https://2022.thef2e.com/news/week2"
    case type === 3:
      return "https://2022.thef2e.com/news/week3"
    default:
      return ""
  }
}
const linkTo = (type) => {
  const url = getUrl(type)
  loadingStore.linkTo(location, url)
}
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const se5TimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: "#se5-container",
      scrub: true,
      start: "top 0%",
      pin: true,
    },
  })
  se5TimeLine.to("#se5-container", {
    xPercent: -66.66666,
    // yPercent: 100,
    ease: "none",
  })
})
</script>
<template>
  <div class="overflow-hidden">
    <div id="se5-container" class="flex relative" style="width: 300%">
      <div class="absolute inset-0 z-10 flex items-end">
        <div class="flex flex-grow pb-52">
          <div style="width: 15.7%"></div>
          <div id="se5-tank">
            <img src="@/assets/img/tank-side.svg" alt="" />
          </div>
          <div class="flex items-end line-wrapper">
            <img class="w-full" src="@/assets/img/se5-line.svg" alt="" />
          </div>
        </div>
      </div>
      <!-- 第一塊 -->
      <div class="bg-primary relative h-screen w-screen">
        <div class="absolute inset-0 flex flex-col pt-56 items-center">
          <div class="text-6xl text-tertiary pb-2">WEEK 1</div>
          <div class="pb-12 text-6xl lg:text-7xl">The F2E 活動網站設計</div>
          <div class="text-4xl pb-4">視差滾動</div>
          <div class="text-4xl pb-11">#板塊設計</div>
          <div class="pb-11">
            <Flag />
          </div>
          <button
            @click="linkTo(1)"
            class="text-4xl px-11 py-3 bg-white text-primary cursor-pointer z-10"
          >
            查看關卡細節
          </button>
        </div>

        <div class="h-full">
          <img class="h-full" src="@/assets/img/week1.svg" alt="" />
        </div>
      </div>
      <!-- 第二塊 -->
      <div class="relative h-screen w-screen" style="background-color: #76b9d6">
        <div class="absolute inset-0 flex flex-col pt-56 items-center">
          <div class="text-6xl pb-2" style="color: #0061a1">WEEK 2</div>
          <div class="text-7xl pb-12">今晚，我想來點點簽</div>
          <div class="text-4xl pb-4">canvas</div>
          <div class="text-4xl pb-11">#凱鈿行動科技</div>
          <div class="pb-11">
            <Flag />
          </div>
          <button
            class="text-4xl px-11 py-3 bg-white text-primary z-10"
            @click="linkTo(2)"
          >
            查看關卡細節
          </button>
        </div>
        <div class="h-full">
          <img class="h-full" src="@/assets/img/week2.svg" alt="" />
        </div>
      </div>
      <!-- 第三塊 -->
      <div class="relative h-screen w-screen" style="background-color: #215400">
        <div class="absolute inset-0 flex flex-col pt-56 items-center">
          <div class="text-6xl pb-2" style="color: #c7ffa3">WEEK 3</div>
          <div class="text-7xl pb-12">Scrum 新手村</div>
          <div class="text-4xl pb-4">JS draggable</div>
          <div class="text-4xl pb-11">#鈦坦科技</div>
          <div class="pb-11">
            <Flag />
          </div>
          <button
            class="text-4xl px-11 py-3 bg-white text-primary z-10"
            @click="linkTo(3)"
          >
            查看關卡細節
          </button>
        </div>
        <div class="h-full">
          <img class="h-full" src="@/assets/img/week3.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.line-wrapper {
  width: calc(200vw - 4%);
}
</style>
