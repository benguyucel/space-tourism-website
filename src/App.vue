<template>
  <div  class="w-full min-h-100dvh bg-fixed bg-no-repeat bg-cover transition-all duration-500 ease-in-out overflow-x-hidden"
    :class="backgroundClass" style="position: relative; z-index: 0;">
    <Header />
    <main class="relative z-10">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const backgroundClass = computed(() => {
  const path = route.path;
  const baseClass = 'bg-no-repeat bg-cover bg-bottom min-h-screen';

  const backgrounds = {
    '/': {
      desktop: 'lg:bg-[url("/assets/home/background-home-desktop.jpg")]',
      tablet: 'md:bg-[url("/assets/home/background-home-tablet.jpg")]',
      mobile: 'bg-[url("/assets/home/background-home-mobile.jpg")]',
    },
    '/destination': {
      desktop: 'lg:bg-[url("/assets/destination/background-destination-desktop.jpg")]',
      tablet: 'md:bg-[url("/assets/destination/background-destination-tablet.jpg")]',
      mobile: 'bg-[url("/assets/destination/background-destination-mobile.jpg")]',
    },
    '/crew': {
      desktop: 'lg:bg-[url("/assets/crew/background-crew-desktop.jpg")]',
      tablet: 'md:bg-[url("/assets/crew/background-crew-tablet.jpg")]',
      mobile: 'bg-[url("/assets/crew/background-crew-mobile.jpg")]',
    },
    '/technology': {
      desktop: 'lg:bg-[url("/assets/technology/background-technology-desktop.jpg")]',
      tablet: 'md:bg-[url("/assets/technology/background-technology-tablet.jpg")]',
      mobile: 'bg-[url("/assets/technology/background-technology-mobile.jpg")]',
    },
  };

  const defaultBg = backgrounds['/'];
  const bg = backgrounds[path] || defaultBg;

  return `${baseClass} ${bg.mobile} ${bg.tablet} ${bg.desktop}`;
});
</script>