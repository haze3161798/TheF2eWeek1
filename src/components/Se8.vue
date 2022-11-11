<script setup>
import { gsap } from "gsap"
import { onMounted } from "vue"
import { useLoadingStore } from "@/stores/loading"
const store = useLoadingStore()

/** @enum {string} */
const UrlEnum = {
  /** @type {"block"} */
  BLOCK: "block",
  /** @type {"titan"} */
  TITAN: "titan",
  /** @type {"kdan"} */
  KDAN: "kdan",
  /** @type {"jira"} */
  JIRA: "jira",
  /** @type {"miro"} */
  MIRO: "miro",
  /** @type {"dootted"} */
  DOOTTED: "dootted",
}
const urlData = {
  block: "https://blockstudio.tw/",
  titan: "https://titansoft.com/tw",
  kdan: "https://www.kdanmobile.com/zh-tw",
  jira: "https://titansoft.com/tw/go_jira",
  miro: "https://titansoft.com/tw/get_miro",
  dootted: "https://www.dottedsign.com/zh-tw/",
}
const linkTo = (url) => {
  store.linkTo(location, urlData[url])
}
onMounted(() => {
  gsap.to("#bigDiamond", {
    translateX: "100%",
    ease: "none",
    repeat: -1,
    duration: 5,
  })
  gsap.to("#midDiamond", {
    translateX: "100%",
    ease: "none",
    repeat: -1,
    duration: 4,
  })
  gsap.to("#smallDiamond", {
    translateX: "100%",
    ease: "none",
    repeat: -1,
    duration: 3,
  })
})
</script>
<template>
  <div class="bg-primary pt-28 relative overflow-hidden">
    <div id="bigDiamond" class="absolute inset-0 overflow-hidden diamond">
      <img class="w-full" src="@/assets/img/big-diamond.png" alt="" />
    </div>
    <div id="midDiamond" class="absolute inset-0 overflow-hidden diamond">
      <img class="w-full" src="@/assets/img/mid-diamond.png" alt="" />
    </div>
    <div id="smallDiamond" class="absolute inset-0 overflow-hidden diamond">
      <img class="w-full" src="@/assets/img/small-diamond.png" alt="" />
    </div>
    <div class="max-w-screen-2xl text-center mx-auto">
      <div class="">
        <div class="text-7xl pb-12">
          <span style="color: #ffc612">鑽石級</span>
          贊助商
        </div>
        <div class="flex justify-center pb-36">
          <div
            class="mx-8 cursor-pointer relative"
            @click="linkTo(UrlEnum.BLOCK)"
          >
            <img src="@/assets/img/block.svg" alt="" />
          </div>
          <div
            class="mx-8 relative cursor-pointer"
            @click="linkTo(UrlEnum.TITAN)"
          >
            <img src="@/assets/img/titan.svg" alt="" />
          </div>
          <div
            class="mx-8 relative cursor-pointer"
            @click="linkTo(UrlEnum.KDAN)"
          >
            <img src="@/assets/img/kdan.svg" alt="" />
          </div>
        </div>
        <div class="text-7xl pb-12">共同推廣</div>
        <div class="flex justify-center pb-36">
          <div
            class="mx-8 relative cursor-pointer"
            @click="linkTo(UrlEnum.JIRA)"
          >
            <img src="@/assets/img/jira.svg" alt="" />
          </div>
          <div
            class="mx-8 relative cursor-pointer"
            @click="linkTo(UrlEnum.MIRO)"
          >
            <img src="@/assets/img/miro.svg" alt="" />
          </div>
          <div
            class="mx-8 relative cursor-pointer"
            @click="linkTo(UrlEnum.DOOTTED)"
          >
            <img src="@/assets/img/dotted.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.diamond {
  transform: translateX(-100%);
}
</style>
