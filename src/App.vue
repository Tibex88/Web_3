<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<!-- outer border -->
  <div class="w-screen h-screen bg-[url('./assets/bg.png')] bg-no-repeat bg-contain bg-fixed bg-center overflow-x-hidden overflow-y-scroll">

    <div class="flex w-full h-full justify-between absolute">
      
      <div class="w-full h-4 bg-red-800 absolute inset-0"></div>
      
      <div class="w-4 h-1/3 bg-red-800 relative">
        <div class="aspect-square w-5 h-10 bg-[url('./assets/splash.png')] bg-cover mix-blend-difference rotate-180 absolute -bottom-2"></div>
      </div>

      <div class="w-4 h-1/3 bg-red-800 relative">
        <div class="aspect-square w-5 h-10 bg-[url('./assets/splash.png')] bg-cover mix-blend-difference rotate-180 absolute -bottom-2"> </div>
      </div>
    </div>

<div class="p-8">
  <p class="text-whtie">text</p>
  <img src="./assets/pot3.png" class="w-32 aspect-square" alt="">
</div>

  </div>

</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
