<template>
    <div class="max-w-[1440px]  mx-auto technology text-white pt-10 md:px-8 lg:pl-[165px]  ">
        <h1 class="text-mobile-4 font-family-barlow-condensed tracking-600 text-center md:text-left"><span
                class="text-white/25 font-medium tracking-600 mr-4 ">01</span>PICK YOUR DESTINATION</h1>
        <div class="flex flex-col items-center md:items-start lg:flex-row px-10">
            <img :src="data.destinations[selectedDestination].images.webp" alt="Destination Image"
                class="w-[250px] h-[250px] mt-20 md:w-[300px] md:h-[300px] md:self-center xl:w-[480px] xl:h-[480px]">
            <div class="flex flex-col items-center">
                <div class="md:self-center lg:mt-20">
                    <ul
                        class="flex justify-between gap-10 mt-8 font-family-barlow-condensed text-mobile-6 md:text-desktop-8 ">
                        <li v-for="(destination, index) in data.destinations" :key="index"
                            class="uppercase cursor-pointer pb-2 hover:border-b-2 hover:border-white/50 transition-all duration-300"
                            :class="{ ' border-b-2 border-white': selectedDestination == index }"><span
                                @click="handleDestinationSelect(index)">{{ destination.name }}</span>
                        </li>
                    </ul>

                </div>
                <div class="content pb-1000 px-[87px]">
                    <p
                        class="text-mobile-2 md:text-tablet-1 font-family-bellefair text-center lg:text-left mt-4 uppercase">
                        {{ data.destinations[selectedDestination].name }}

                    </p>
                    <div class="border-b-2 border-white/25 mt-10 pb-6 md:px-28 lg:px-0 lg:py-10 shrin-0">
                        <p class="text-mobile-5 font-family-barlow font-light text-center lg:text-left">
                            {{ data.destinations[selectedDestination].description }}
                        </p>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between gap-12 mt-10">
                        <div class="flex flex-col items-center gap-8">
                            <span class="text-desktop-7 font-family-barlow font-light uppercase">AVG. DISTANCE</span>
                            <span class="text-desktop-6 font-family-bellefair font-light uppercase">
                                {{ data.destinations[selectedDestination].distance }}
                            </span>
                        </div>
                        <div class="flex flex-col items-center gap-8">
                            <span class="text-desktop-7 font-family-barlow font-light uppercase">Est. travel time</span>
                            <span class="text-desktop-6 font-family-bellefair font-light uppercase">
                                {{ data.destinations[selectedDestination].travel }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from '../store';

const { data } = useDataStore();
const selectedDestination = ref(0);

const handleDestinationSelect = (index) => {
    selectedDestination.value = index;
    console.log('Selected destination:', data.destinations[index]);
};
</script>

<style></style>