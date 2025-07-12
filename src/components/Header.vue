<template>
    <header class="flex justify-between  relative max-w-[1440px] gap-10 mx-auto">
        <div class="flex items-center justify-between w-full pt-0 lg:pt-10 lg:gap-10">
            <div class="px-8 desktop:px-0 z-50 pt-4 lg:pt-0">
                <img src="/assets/shared/logo.svg" alt="Logo" class="w-12 h-12" />
            </div>
            <div class="px-8 md:px-0  md:hidden z-50">
                <img v-if="!isMobileMenuOpen" src="/assets/shared/icon-hamburger.svg" alt="Menu Icon"
                    class="w-6 h-6 cursor-pointer" @click="toggleMobileMenu" />
                <img v-if="isMobileMenuOpen" src="/assets/shared/icon-close.svg" alt="Menu Icon"
                    class="w-6 h-6 cursor-pointer" @click="toggleMobileMenu" />
            </div>
            <div class="md:flex md:relative fixed"
                :class="{ 'top-0 left-0 w-full h-full z-40 md:top-auto md:left-auto md:w-auto md:h-auto  md:z-auto ': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }">
                <nav
                    class="fixed right-0 top-0  pr-1  md:pr-10 gap-8 w-1/2 md:w-auto flex flex-col  h-full px-12 pt-32 md:pt-0 md:relative md:flex md:flex-row md:items-center md:justify-end md:gap-10 text-white text-lg  bg-white/5 backdrop-blur-md  md:pl-1200 lg:pl-1600 ">
                    <RouterLink
                        class="font-family-barlow-condensed font-light py-2 w-full md:py-12 text-desktop-8 tracking-200 uppercase relative flex items-center gap-2"
                        to="/" :class="{ 'border-r-2 md:border-r-0 md:border-b-2 border-white': $route.path === '/' }">
                        <span class="text-desktop-8 tracking-200 pr-2   font-bold">00</span>Home
                    </RouterLink>
                    <RouterLink
                        class="font-family-barlow-condensed font-light py-2 md:py-12 text-desktop-8 tracking-200 uppercase relative flex items-center gap-2"
                        to="/destination"
                        :class="{ 'border-r-2 md:border-r-0 md:border-b-2 border-white': $route.path === '/destination' }">
                        <span class="text-desktop-8 tracking-200 pr-2 font-bold">01</span>Destination
                    </RouterLink>
                    <RouterLink
                        class="font-family-barlow-condensed font-light py-2 md:py-12 text-desktop-8 tracking-200 uppercase relative flex items-center gap-2"
                        to="/crew"
                        :class="{ 'border-r-2 md:border-r-0 md:border-b-2 border-white': $route.path === '/crew' }">
                        <span class="text-desktop-8 tracking-200 pr-2 font-bold">02</span>Crew
                    </RouterLink>
                    <RouterLink
                        class="font-family-barlow-condensed font-light py-2 md:py-12 text-desktop-8 tracking-200 uppercase relative flex items-center gap-2"
                        to="/technology"
                        :class="{ 'border-r-2 md:border-r-0 md:border-b-2 border-white': $route.path === '/technology' }">
                        <span class="text-desktop-8 tracking-200 pr-2 font-bold">03</span>Technology
                    </RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
