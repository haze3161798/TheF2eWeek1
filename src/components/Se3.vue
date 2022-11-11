<script setup>
import { onMounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(ScrollTrigger, TextPlugin)
const animated = (e) => {
  const x = -100
  e.style.transform = `translate(${x}px, 0px)`
  gsap.fromTo(
    e,
    { x: x, y: 0, opacity: 0, visibility: "hidden" },
    {
      duration: 1,
      delay: 0.2,
      x: 0,
      y: 0,
      visibility: "visible",
      opacity: "1",
      ease: "expo",
      overwrite: "auto",
    },
  )
}
const hide = (e) => {
  gsap.set(e, { opacity: 0, visibility: "hidden" })
}
onMounted(() => {
  const soldier2Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#soldier2-container",
      scrub: true,
      start: "top 60%",
      end: "top 20%",
    },
  })
  soldier2Timeline
    .from("#tree", {
      yPercent: 100,
    })
    .from("#soldier2", {
      yPercent: 100,
    })
  gsap.to("#se3Chat", {
    text: "動畫技能樹太雜無從下手...",
    duration: 1.5,
    scrollTrigger: {
      trigger: "#se3Chat",
      toggleActions: "play pause resume reset",
    },
  })
  const se3Chat = document.querySelector("#se3Chat")
  ScrollTrigger.create({
    trigger: se3Chat,
    onEnter: function () {
      animated(se3Chat)
    },

    onLeave: function () {
      hide(se3Chat)
    },
    onEnterBack: function () {
      animated(se3Chat)
    },
  })
})
</script>
<template>
  <div
    class="bg-primary relative mb-60"
    id="soldier2-container"
    style="max-width: 980px; height: 570px"
  >
    <div
      id="se3Chat"
      class="text-4xl whitespace-nowrap absolute z-10 red-block-document red-block-3 xl:top-2/3 xl:left-2/3"
    ></div>
    <div class="absolute inset-0 flex items-end justify-center">
      <div id="tree" class="absolute bottom-0">
        <img src="@/assets/img/tree.svg" alt="" />
      </div>
    </div>
    <div class="absolute inset-0 flex items-end justify-center">
      <div id="soldier2">
        <img src="@/assets/img/soldier2.svg" alt="" />
      </div>
    </div>
  </div>
</template>
