<template>
    <div class="crew max-w-[1440px] h-[calc(100dvh)] mx-auto text-white pt-10  md:px-8 lg:pl-[165px] overflow-hidden ">
        <h2 class="text-mobile-4 font-family-barlow-condensed tracking-600 text-center md:text-left"><span
                class="text-white/25 font-medium tracking-600 mr-4 ">02</span>MEET YOUR CREW</h2>
        <div class="flex flex-col lg:flex-row items-center h-full mt-20 gap-10  transition-opacity duration-500"
            :class="{ 'opacity-0': transitioning, 'opacity-100': !transitioning }" @mousedown="startDragging"
            @mousemove="drag" @mouseup="stopDragging" @mouseleave="stopDragging" @touchstart="startDragging"
            @touchmove="drag" @touchend="stopDragging">
            <div class="flex flex-col text-center lg:text-left flex-1 relative">
                <div class="px-6 flex flex-col gap-4 lg:gap-10">
                    <h2
                        class="text-white/51 uppercase font-family-bellefair text-mobile-4 md:text-tablet-3 lg:text-desktop-4">
                        {{ data.crew[selectedCrew].role }}</h2>
                    <h2
                        class="font-family-bellefair text-mobile-3 md:text-tablet-2 uppercase lg:text-desktop-3 lg:leading-12">
                        {{
                            data.crew[selectedCrew].name }}</h2>
                    <p class="font-family-barlow text-mobile-7 md:text-tablet-5 lg:text-desktop-9">
                        {{ data.crew[selectedCrew].bio }}
                    </p>
                </div>
                <!-- dots -->
                <ul
                    class="flex cursor-pointer gap-7 justify-center lg:justify-start lg:pl-6 pt-10 lg:pt-0 lg:absolute lg:-bottom-30">
                    <li v-for="(crew, index) in data.crew" :key="index">
                        <span @click="handleCrewSelect(index)" class="w-3 h-3 block rounded-full hover:bg-white/50 "
                            :class="selectedCrew == index ? 'bg-white' : 'bg-white/25'"></span>
                    </li>
                </ul>
            </div>

            <div class="flex-1">
                <img :src="data.crew[selectedCrew].images.png" alt="asd" class="w-full h-auto   object-cover" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from '../store';
const selectedCrew = ref(0)
const transitioning = ref(false);
const startX = ref(0);
const isDragging = ref(false);
const handleCrewSelect = (index) => {
    if (selectedCrew.value === index) return;

    changeCrew(index)
}

const { data } = useDataStore();
const startDragging = (e) => {
    isDragging.value = true
    startX.value = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
}
const drag = (e) => {
    if (!isDragging.value) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = startX.value - currentX;

    if (Math.abs(diff) > 50) {
        if (diff > 0 && selectedCrew.value < data.crew.length - 1) {
            changeCrew(selectedCrew.value + 1);
        } else if (diff < 0 && selectedCrew.value > 0) {
            changeCrew(selectedCrew.value - 1);
        }
        isDragging.value = false;
    }
    const stopDragging = () => {
        isDragging.value = false;
    };
};

const changeCrew = (newIndex) => {
    transitioning.value = true;
    setTimeout(() => {
        selectedCrew.value = newIndex;
        transitioning.value = false;
    }, 200);
};
</script>

<style></style>