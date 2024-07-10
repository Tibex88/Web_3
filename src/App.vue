<script setup>
import Decor from './components/Decor.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';


</script>

<template>

  <div class="w-screen h-screen overflow-y-scroll bg-[url('./assets/bg.png')] bg-no-repeat bg-contain bg-fixed bg-center">
    
  <div class="fixed w-full z-[9] cbg-red-500 backdrop-filter backdrop-blur-lg ">
      <Decor />
      <Nav />
  </div>
<!-- home -->
<div class="max-w-[1200px] pt-20 md:pt-24 sm:px-4 px-8 m-auto flex flex-col gap-10 mt-10 ">

  <router-view />
 </div>
 
    <Footer />
  </div>

</template>
