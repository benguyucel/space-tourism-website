<template>
  <div class="max-w-[1440px] pt-20 lg:pt-32  mx-auto flex flex-col ">
    <div class="h-full flex lg:items-end justify-between items-center flex-col lg:flex-row gap-10   px-8 desktop:pl-0">
      <div class="text-white text-center lg:text-left ">
        <h1
          class="font-family-barlow-condensed font-light text-mobile-6 tracking-300 md:text-desktop-5 md:tracking-400 ">
          SO, YOU WANT TO TRAVEL
          TO
        </h1>
        <h2 class="font-family-bellefair text-mobile-1 md:text-desktop-1">SPACE</h2>
        <p
          class="lg:max-w-[440px] md:max-w-[540px] text-mobile-7 md:text-desktop-9 font-family-barlow font-light lg:text-left">
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not
          hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
          this world experience!</p>
      </div>
        <router-link to="/destination" c>
          <button
            class="font-family-bellefair md:text-desktop-4 w-36 h-36  md:w-[15rem] md:h-[15rem] bg-white  rounded-full cursor-pointer relative
             after:absolute after:content-[''] after:w-60 after:h-60  md:after:w-80 md:after:h-80  xl:after:w-96 xl:after:h-96 after:rounded-full after:transition-all duration-400 hover:after:bg-white/15 after:top-1/2 after:right-1/2  after:translate-x-1/2 after:-translate-y-1/2 after:-z-1
             ">
            EXPLORE
          </button>
        </router-link>
    </div>
  </div>
</template>

<!-- SO, YOU WANT TO TRAVEL TO
Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
this world experience!

EXPLORE -->