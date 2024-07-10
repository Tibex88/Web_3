<script setup>
import Card from '../components/Card.vue';
import FAQ from '../components/FAQ.vue';
import Wallet from '../components/Wallet.vue'
import Tier from '../components/Tier.vue';

</script>

<template>
      
      <div class="h-fit flex flex-1 ">
            <div class=" cbg-blue-500 aspect-square w-full flex flex-col gap-10 items-start justify-center">
              <!-- <Wallet /> -->
              <h2 class="text-6xl self-start  py-10">Welcome to </h2>
              
              <p>Sophisticated. Balanced. Secure. Enabling the future of Web3. ChainGPT Pad is the
                decentralized fundraising platform incubating and launching the next generation of
                GameFi, AI, Infra, DeFi, DecSi, SocialFi projects.
              </p>

                <div class="flex gap-5  items-start ">
                  <button class="btn-1 block">IDO pools </button>
                  <button class="btn-1 block">Stake </button>
                  <button class="btn-1 block">Get Notified </button>
                </div>
              
                <div class="grid grid-cols-3 items-center gap-5 divide-x divide-zinc-700 ">
                    <div class="pr-10">
                      <span class="block text-2xl font-bold">100</span> Projects 
                    </div>
                    
                    <div class="pl-10">
                      <span class="block text-2xl font-bold">12</span>Give Aways 
                    </div>
                </div>

            </div>
            
            <div class="sm:hidden md:block cbg-[url('../assets/hand1.png')] bg-contain w-full bg-center relative">
              <img src="../assets/coin.png" class="scale-90 w-1/4 aspect-square m-auto absolute inset-0 -top-10 z-[1]"  alt="">
              <img src="../assets/hand1.png" class="cscale-150 w-full aspect-square m-auto absolute inset-0"  alt="">
              <!-- <img src="../assets/hand1.png" class="outline bg-cover" alt=""> -->
            </div>
      </div>
      
      
      <div class="coutline h-20 flex flex-1 flex-col md:flex-row text-center">
          
        <div 
        v-for="i in 4"
        class="coutline cbg-red-500 p-10 caspect-square w-full flex flex-col gap-2 items-center justify-center h-fit">
  
            <img src="../assets/pot3.png" class="aspect-auto h-24" alt="">
            
            <h2>Sign Up and KYC</h2>
            
            <p>Participating in the ChainGPT Pad requires that you signup and pass KYC.</p>
            
            <button class="btn-1">Sign Up</button>

        </div>
  
        <!-- <div class="outline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2>Verify Wallet</h2>
  
        </div>
        
        <div class="outline cbg-red-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2>Stake</h2>
  
        </div>
  
        <div class="outline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2>Register</h2>
  
        </div> -->

      </div>
  
      <div class="flex overflow-x-scroll">
        <Tier v-for="i in 5" />
      </div>
  
      
      <div class="flex flex-col gap-8">
        <h2 class="text-3xl font-bold"> Token Sale Launchpad </h2>
            <p>
              Gain early access to public and special token sales at a lower price before they hit the market
            </p>

            <div class="flex flex-col md:flex-row gap-5 md:items-center">

              <div class="flex justify-between items-center w-full text-center">
                <p class="text-2xl font-bold">Project List</p>
                <button class="btn-1 flex items-center font-bold gap-2">
                  <fa class="text-red-500" icon="calendar"/>
                  Calendar View
                </button>
              </div>

              <div class="relative">
                <input class="outline outline-1 p-2 rounded-lg pr-2 w-full lg:w-80" type="text" placeholder="Search by Pool Name" name="" id="">
                <div class="absolute top-1/4 right-0 flex gap-2 items-center mr-2">
                  <fa icon="xmark"/>
                  <fa icon="search"/>
                </div>
              </div>

            </div>

      </div>

      <div class="coutline h-52 flex flex-1">
          <div class="coutline cbg-blue-500 aspect-square w-max">

            <!-- here -->


            <p class="text-4xl font-semibold">Upcoming</p>
            <p class="pb-10 text-2xl font-semibold">Pool IDO</p>
            <div class="flex flex-wrap gap-16 justify-center items-center coutline outline-lime-500 w-full h-fit">
              <!--cards  -->
              <Card v-for="i in 12"  />
            </div>
          </div>
      </div>
  
      <FAQ />


</template>