<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted } from "vue"
import Flag from "./Flag.vue"
import { useLoadingStore } from "@/stores/loading"
const loadingStore = useLoadingStore()
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  const flagTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#se6-container",
      scrub: true,
      start: "top 0%",
    },
  })
  flagTL.to("#se6-flag", {
    translateY: 1678,
  })
  const textTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#se6-container",
      scrub: true,
      start: "top 80%",
      end: "top -150%",
    },
  })
  textTl
    .from("#se6-text1", {
      translateX: "100vw",
    })
    .from("#se6-text2", {
      translateX: "100vw",
    })
    .from("#se6-text3", {
      translateX: "100vw",
    })
    .from("#se6-text4", {
      translateX: "100vw",
    })
    .from("#se6-text5", {
      translateX: "100vw",
    })
    .from("#se6-text6", {
      translateX: "100vw",
    })
    .from("#se6-text7", {
      translateX: "100vw",
    })
    .from("#se6-text8", {
      translateX: "100vw",
    })
})
const linkTo = () => {
  loadingStore.linkTo(location, "https://2022.thef2e.com/")
}
</script>
<template>
  <div>
    <div
      id="se6-container"
      class="flex py-72 max-w-screen-2xl px-20 overflow-x-hidden lg:px-52"
      style="padding-bottom: 450px"
    >
      <div class="relative">
        <Flag id="se6-flag" class="absolute top-0 w-36" style="left: -84px" />
        <div>
          <img src="@/assets/img/se6-line.svg" alt="" />
        </div>
      </div>
      <div class="pl-32 w-full">
        <div class="flex items-end justify-between pb-80">
          <div>
            <div id="se6-text1" class="text-tertiary text-7xl">SIGN UP!</div>
            <div id="se6-text2">
              開放報名：<br />
              10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59<br />
              <br />
              截止前可修改報名組別。
            </div>
          </div>
          <button
            class="text-primary bg-white w-80 h-16 lg:text-2xl xl:text-4xl"
            @click="linkTo"
          >
            點我註冊報名!
          </button>
        </div>
        <div class="pb-80">
          <!-- 第二塊 -->
          <div id="se6-text3" class="text-7xl text-tertiary pb-20">START!</div>
          <div id="se6-text4">
            各組別開賽：<br />
            UI組、團體組開賽 10/31、前端組開賽 11/7
          </div>
        </div>
        <div class="pb-80">
          <!-- 第三塊 -->
          <div id="se6-text5" class="text-7xl text-tertiary pb-20">UPLOAD!</div>
          <div id="se6-text6">
            登陸作品：<br />
            10/31(一) 中午 12:00 - 11/28(一) 中午 12:00
          </div>
        </div>
        <div>
          <!-- 第四塊 -->
          <div id="se6-text7" class="text-7xl text-tertiary">STREAM!</div>
          <div id="se6-text8">
            資深開發者到來 ，直播分享零阻礙！<br /><br />
            線上直播：<br />
            11/3 - 11/24(每週四)
          </div>
        </div>
      </div>
    </div>
    <div class="text-6xl text-center pb-6">區區修煉已經無法滿足了嗎？</div>
    <div class="text-6xl text-center">還有比賽等著你！</div>
    <div>
      <img src="@/assets/img/tank-bg.png" alt="" />
    </div>
    <div class="flex flex-col items-center" style="padding-bottom: 534px">
      <div class="text-tertiary pb-10 text-4xl lg:text-6xl">評審機制</div>
      <div class="pb-60 lg:text-2xl">
        初選：<br />
        將由六角學院前端、UI 評審進行第一波篩選，<br />
        並於 12/5(五)公布初選佳作名單<br /><br />
        決選：<br />
        由三大企業針對該企業主題進行入圍獎最後篩選， <br />並於
        12/23(五)公布企業得獎名單
      </div>
      <div class="text-tertiary pb-10 text-4xl lg:text-6xl">獎項</div>
      <ul class="text-2xl lg:text-4xl">
        <li class="pb-9" style="list-style: square">
          <span>初選佳作 共六十位 </span>
          <span class="text-primary">數位獎狀 </span>
          <div class="mt-5">每週主題個人組十位、團體組十組</div>
        </li>
        <li class="pb-9" style="list-style: square">
          <span>個人企業獎 共六位 </span>
          <span class="text-primary">NTD 3,000/位</span>
          <div class="mt-5">每週主題各 2 名，設計 1 位、前端 1 位</div>
        </li>
        <li class="pb-9" style="list-style: square">
          <span>團體企業獎 共三組 </span>
          <span class="text-primary">NTD 10,000/組 </span>
          <div class="mt-5">每週主題各 1 組</div>
        </li>
        <li style="list-style: square">
          <span class=""> 以上皆提供完賽數位獎狀 </span>
        </li>
      </ul>
    </div>
  </div>
</template>
