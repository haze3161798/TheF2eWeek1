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
  gsap.to(".typing1", {
    text: "羨慕別人酷酷的動畫...",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".typing1",
      toggleActions: "play pause resume reset",
    },
  })
  const tank1 = document.querySelector("#tank1")
  ScrollTrigger.create({
    trigger: tank1,
    onEnter: function () {
      animated(tank1)
    },

    onLeave: function () {
      hide(tank1)
    },
    onEnterBack: function () {
      animated(tank1)
    },
  })
  const soldier1Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#soldier1-container",
      scrub: true,
      start: "top 60%",
      end: "top 20%",
    },
  })

  soldier1Timeline
    .from("#soldier1", {
      xPercent: 100,
    })
    .from(
      "#soldier1",
      {
        yPercent: 100,
      },
      "<",
    )
    .from("#chatBox", {
      scale: 0,
    })

  gsap.to("#se2Chat", {
    text: "滿足不了同事的許願...",
    duration: 1.5,
    scrollTrigger: {
      trigger: "#se2Chat",
      toggleActions: "play pause resume reset",
    },
  })
  const se2Chat = document.querySelector("#se2Chat")
  ScrollTrigger.create({
    trigger: se2Chat,
    onEnter: function () {
      animated(se2Chat)
    },

    onLeave: function () {
      hide(se2Chat)
    },
    onEnterBack: function () {
      animated(se2Chat)
    },
  })
})
</script>
<template>
  <div
    class="tank-im-cool-wrapper bg-primary relative mb-60 w-full"
    style="max-width: 980px"
  >
    <div class="absolute tank-side z-10 w-1/3">
      <img src="@/assets/img/tank-side.gif" alt="" />
    </div>
    <div
      class="absolute tank-document text-4xl whitespace-nowrap typing1 z-10 red-block-document"
    ></div>
    <div style="max-width: 637px" id="tank1">
      <img class="w-full" src="@/assets/img/tank-im-cool.gif" alt="" />
    </div>
  </div>

  <div class="flex justify-end mb-60 relative">
    <div
      id="se2Chat"
      class="text-4xl whitespace-nowrap absolute z-10 red-block-document right lg:top-1/2 lg:right-2/3"
    ></div>
    <div
      id="soldier1-container"
      class="bg-primary relative flex justify-end overflow-y-clip overflow-x-hidden"
      style="width: 980px; height: 570px"
    >
      <div id="soldier1" class="soldier1" style="max-width: 637px">
        <img class="w-full" src="@/assets/img/soldier.svg" alt="" />
      </div>
      <div id="chatBox" class="absolute top-0 left-8">
        <div class="relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-black text-4xl">!@#$%...</div>
          </div>
          <img src="@/assets/img/chat-box.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tank-im-cool-wrapper {
  padding: 63px 187px 78px 156px;
}
.tank-side {
  top: 40%;
  left: 33%;
}

@media (min-width: 1240px) {
  .tank-document {
    top: 42%;
    left: 76%;
  }
}
</style>
