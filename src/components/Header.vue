<script setup>
import { useLoadingStore } from "@/stores/loading"
const loadingStore = useLoadingStore()
const linkTo = (url) => {
  loadingStore.linkTo(location, url)
}
</script>
<template>
  <div class="bg-primary">
    <div class="max-w-screen-2xl mx-auto">
      <div class="flex items-center justify-end px-9">
        <button>
          <img src="@/assets/img/header_logo.svg" alt="" />
        </button>
        <ul class="flex">
          <li
            class="mx-4 cursor-pointer text-black"
            @click="linkTo('https://2022.thef2e.com/news')"
          >
            關卡資訊
          </li>
          <li
            class="mx-4 cursor-pointer text-black"
            @click="linkTo('https://hackmd.io/ofJD4K7iSI65V19zxC7d0w')"
          >
            攻略資源
          </li>
          <li
            class="mx-4 cursor-pointer text-black"
            @click="linkTo('https://2022.thef2e.com/jobs')"
          >
            求職專區
          </li>
        </ul>
        <button
          class="small-btn my-3 mx-1 text-primary"
          @click="linkTo('https://2022.thef2e.com')"
        >
          註冊報名
        </button>
        <button
          class="small-btn my-3 mx-1 text-primary"
          @click="linkTo('https://2022.thef2e.com/login')"
        >
          登入
        </button>
      </div>
    </div>
  </div>
</template>
