<script setup>
import { ref } from "vue"
import { getDoc } from "@/assets/document/qa"
import { useLoadingStore } from "@/stores/loading"
const loadingStore = useLoadingStore()
const activeId = ref(1)
const setActive = (id) => {
  activeId.value = id
}
const linkTo = () => {
  loadingStore.linkTo(location, "https://2022.thef2e.com/")
}
const qaDocument = getDoc()
</script>
<template>
  <div class="bg-primary py-3 text-center mb-20 text-2xl lg:text-6xl lg:py-9">
    常見問答
  </div>
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex px-9 pb-20">
      <button
        class="text-primary h-16 mx-5 w-40 bg-white lg:text-2xl xl:text-4xl lg:w-80 hover:bg-secondary"
        :class="{ 'bg-secondary': activeId === 1 }"
        @click="setActive(1)"
      >
        一般常見問題
      </button>
      <button
        class="text-primary h-16 mx-5 w-40 bg-white lg:text-2xl xl:text-4xl lg:w-80 hover:bg-secondary"
        :class="{ 'bg-secondary': activeId === 2 }"
        @click="setActive(2)"
      >
        UI 設計師
      </button>
      <button
        class="text-primary h-16 mx-5 w-40 bg-white lg:text-2xl xl:text-4xl lg:w-80 hover:bg-secondary"
        :class="{ 'bg-secondary': activeId === 3 }"
        @click="setActive(3)"
      >
        前端工程師
      </button>
      <button
        class="text-primary h-16 mx-5 w-40 bg-white lg:text-2xl xl:text-4xl lg:w-80 hover:bg-secondary"
        :class="{ 'bg-secondary': activeId === 4 }"
        @click="setActive(4)"
      >
        團體組
      </button>
    </div>
    <div class="pb-64 px-5">
      <div v-for="qaList in qaDocument" :key="qaList.id">
        <template v-if="activeId === qaList.id">
          <div
            class="pb-12 px-9"
            v-for="qaDoc in qaList.content"
            :key="qaDoc.Q"
          >
            <div class="text-tertiary pb-1 lg:text-2xl">{{ qaDoc.Q }}</div>
            <div class="lg:text-2xl">{{ qaDoc.A }}</div>
          </div>
        </template>
      </div>
    </div>
    <button
      @click="linkTo"
      class="text-7xl bg-white text-primary w-full py-7 mb-56"
    >
      立即註冊報名!
    </button>
  </div>
</template>
