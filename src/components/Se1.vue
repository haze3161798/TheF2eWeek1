<script setup>
import { ref, onUnmounted, onMounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { useLoadingStore } from "@/stores/loading"
gsap.registerPlugin(ScrollTrigger, TextPlugin)
const loadingStore = useLoadingStore()
const isSelectOnLogin = ref(true)
const onSelectOnLogin = (bool) => {
  isSelectOnLogin.value = bool
}
const onUpDownKeydown = (e) => {
  if (e.code === "ArrowUp") {
    e.preventDefault()
    isSelectOnLogin.value = true
  }
  if (e.code === "ArrowDown") {
    e.preventDefault()
    isSelectOnLogin.value = false
  }
}
const isLoadingSuccess = ref(false)
window.onload = () => {
  isLoadingSuccess.value = true
}
const onEnterKeyDown = (e) => {
  if (e.code === "Enter") {
    loadingStore.linkTo(
      location,
      isSelectOnLogin.value
        ? "https://2022.thef2e.com/login"
        : "https://2022.thef2e.com/",
    )
  }
}
const linkTo = (bool) => {
  loadingStore.linkTo(
    location,
    bool ? "https://2022.thef2e.com/login" : "https://2022.thef2e.com/",
  )
}
// const tank1 = ref()
onMounted(() => {})
document.addEventListener("keydown", onUpDownKeydown)
document.addEventListener("keydown", onEnterKeyDown)
onUnmounted(() => {
  document.removeEventListener("keydown", onUpDownKeydown)
  document.removeEventListener("keydown", onEnterKeyDown)
})
</script>
<template>
  <div class="pb-60 h-screen overflow-hidden px-6 xl:px-0">
    <div
      class="max-w-screen-2xl mx-auto se1-wrapper"
      :class="{ active: isLoadingSuccess }"
    >
      <div class="flex justify-between items-center pt-6 pb-28 px-9">
        <div>1- 00</div>
        <div>HI- 99999</div>
        <div>Hex School</div>
      </div>
      <div class="mx-auto pb-28" style="max-width: 1048px">
        <img class="w-full" src="@/assets/img/se1-logo.svg" alt="" />
      </div>
      <div class="flex justify-center pb-26">
        <div
          class="mr-11 isSelectOnLogin"
          id="tankPointer"
          :class="{ active: !isSelectOnLogin }"
        >
          <img class="w-20" src="@/assets/img/tank-pointer.gif" alt="" />
        </div>
        <div class="text-5xl">
          <div
            class="cursor-pointer hover:text-primary"
            :class="{ 'text-primary': isSelectOnLogin }"
            @mouseenter="onSelectOnLogin(true)"
            @click="linkTo(true)"
          >
            1 LOG IN
          </div>
          <div
            class="cursor-pointer hover:text-primary"
            :class="{ 'text-primary': !isSelectOnLogin }"
            @mouseenter="onSelectOnLogin(false)"
            @click="linkTo(false)"
          >
            2 SIGN UP
          </div>
        </div>
      </div>
      <div class="text-center text-4xl pb-80">
        Interactive And Responsive Web Design.
      </div>
    </div>
  </div>
</template>
<style scoped>
.se1-wrapper {
  transform: translateY(100vh);
  transition: transform 5s linear;
}
.se1-wrapper.active {
  transform: translateY(0);
}
.isSelectOnLogin {
  transform: translateY(0px);
  transition: transform 0.3s;
}
.isSelectOnLogin.active {
  transform: translateY(63px);
}
</style>
