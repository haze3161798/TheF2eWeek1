<script setup>
import Home from "@/pages/HomeView.vue"
import HeaderPage from "@/components/Header.vue"
import Loading from "@/pages/Loading.vue"
import { useLoadingStore } from "@/stores/loading"
import { computed, onMounted } from "vue"
const loadingStore = useLoadingStore()
const isLoading = computed(() => loadingStore.isLoading)
onMounted(() => {
  setTimeout(() => {
    loadingStore.changeLoadingType()
  }, 1000)
})
</script>
<template>
  <div class="bg-black relative" style="min-width: 750px">
    <Loading v-if="isLoading" />
    <HeaderPage />
    <Home />
  </div>
</template>
