<script setup>
import Decor from './components/Decor.vue';
import Nav from './components/Nav.vue';
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';
import FAQ from './components/FAQ.vue';
import Wallet from './components/Wallet.vue'
</script>

<template>
  <div class="w-screen h-full bg-[url('./assets/bg.png')] bg-no-repeat bg-contain bg-fixed bg-center pointer-events-none">
    
  <!-- <div class="  sticky "> -->
      <Decor />
      <Nav />
  <!-- </div> -->

  <div class="max-w-[1200px] m-auto flex flex-col gap-10 mt-10 ">
      
    <div class="coutline h-fit flex flex-1">
          <div class=" bg-blue-500 aspect-square w-full [] flex items-center justify-center">
            <Wallet />
          </div>
          <div class="cbg-[url('./assets/hand1.png')] bg-contain w-full bg-center relative">
            <img src="./assets/coin.png" class="w-1/4 aspect-square m-auto absolute inset-0 -top-10 z-10"  alt="">
            <img src="./assets/hand1.png" class="scale-150 w-full aspect-square m-auto absolute inset-0"  alt="">
            <!-- <img src="./assets/hand1.png" class="outline bg-cover" alt=""> -->
          </div>
    </div>
    
    
    <div class="outline h-20 flex flex-1 flex-col md:flex-row text-center">
        
      <div class="outline cbg-red-500 p-2 aspect-square w-full flex flex-col gap-2 items-center justify-center">

          <img src="./assets/pot3.png" class="aspect-auto h-24" alt="">
          
          <h2>Sign Up and KYC</h2>
          
          <p>Participating in the ChainGPT Pad requires that you signup and pass KYC.</p>
          
          <button>Sign Up</button>
      </div>

      <div class="outline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">

        <h2>Verify Wallet</h2>

      </div>
      
      <div class="outline cbg-red-500 aspect-square w-full flex flex-col items-center justify-center">

        <h2>Stake</h2>

      </div>

      <div class="outline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">

        <h2>Register</h2>

      </div>
    </div>
    
    <div class="coutline h-52 flex flex-1">
        <div class="coutline cbg-blue-500 aspect-square w-full">
          <p class="p-10">Upcoming</p>
          <div class="flex flex-wrap gap-16 justify-center items-center coutline outline-lime-500 w-full h-fit">
            <!--cards  -->
            <Card v-for="i in 12"  />
          </div>
        </div>
        <!-- <div class="outline cbg-red-500 aspect-square w-full"></div> -->
    </div>

    <FAQ />

  </div>
    <Footer />
  </div>



</template>

<style scoped>

</style>
