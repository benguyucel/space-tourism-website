<template>
  <div class="max-w-[1440px]  mx-auto technology text-white pt-10 lg:pl-[165px]  ">
    <h1 class="text-mobile-4 font-family-barlow-condensed tracking-600  px-8 md:px-0  text-center md:text-left mb-15">
      <span class="text-white/25 font-medium tracking-600 mr-4">03</span>SPACE LAUNCH 101
    </h1>
    <div class="flex flex-col md:flex-row md:justify-between transition-opacity duration-500"
      :class="isChanged ? 'opacity-0' : 'opacity-100'">
      <div
        class="flex flex-col lg:flex-row    items-center text-center pt-12 gap-5 px-6 order-2 lg:order-1 md:flex-1 lg:pl-0">
        <div class="lg:order-2 lg-gap-2">
          <h2 class="font-family-bellefair text-mobile-4   md:text-tablet-3 text-white/50 uppercase">THE TERMINOLOGY…
          </h2>
          <h3 class="font-family-bellefair text-mobile-3 md:text-tablet-2 uppercase">{{
            data.technology[selectedItem].name }}</h3>
          <p class="text-mobile-7 md:text-tablet-5 font-family-barlow">{{ data.technology[selectedItem].description }}
          </p>
        </div>
        <ul class="flex justify-center lg:flex-col lg:order-1 items-center gap-8">
          <li v-for="(item, index) in data.technology" :key="index" @click="handleSelectedItem(index)"
            class="cursor-pointer font-family-bellefair text-mobile-3 w-14 h-14 flex items-center justify-center rounded-full border"
            :class="selectedItem === index ? ' border-white bg-white text-black' : ' border-white/25'">
            {{ index + 1 }}</li>
        </ul>
      </div>
      <div class="order-1 mt-10 lg:order-2">
        <img
          :src="screenWith < 1024 ? data.technology[selectedItem].images.landscape : data.technology[selectedItem].images.portrait"
          alt="T" class="w-full object-cover h-auto">
      </div>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useDataStore } from '../store';
const isChanged = ref(false)
const screenWith = ref(0)
const selectedItem = ref(0)
const { data } = useDataStore()
onMounted(() => {
  screenWith.value = window.innerWidth;
  const handleResize = () => {
    screenWith.value = window.innerWidth
  }
  window.addEventListener('resize', handleResize);

})
const handleSelectedItem = (index) => {
  if (selectedItem.value === index) return
  isChanged.value = true
  setTimeout(() => {
    selectedItem.value = index
    isChanged.value = false
  }, 200)
}
</script>
