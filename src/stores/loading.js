import { ref } from "vue"
import { defineStore } from "pinia"

export const useLoadingStore = defineStore("loading", () => {
  const isLoading = ref(true)
  const changeLoadingType = () => {
    isLoading.value = !isLoading.value
  }
  const linkTo = (location, url) => {
    changeLoadingType()
    setTimeout(() => {
      location.href = url
    }, 500)
  }
  return {
    isLoading,
    changeLoadingType,
    linkTo,
  }
})
