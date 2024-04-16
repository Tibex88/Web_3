
<script setup>
import Button from './Button.vue';
</script>

<template>
    
    <!-- <div class="fixed"> -->
        <!-- small -->
        <div class="sm:hidden block cbg-laser  w-full h-fit  py-8 px-20 pb-0">
        <div class="flex justify-center mt-5">
            <!-- <p>Menu</p> -->
            <fa class="text-lg bg-white text-black p-2 rounded-full aspect-suare" icon="bars"/>
            <!-- <button class="bg-transparent border-white border-4 rounded-none">Menu</button> -->
        </div>
        </div>

    <!-- big -->
    <div class="sm:block hidden cbg-laser mx-auto w-full h-fit py-8 px-20 pb-0">
        
        <div class="flex gap-10 justify-between">
        <!-- <div class="flex justify-around outline w-full gap-5"> -->
        <!-- flex justify-around outline w-full gap-5 -->
        
        <!-- start of nav -->
        <div class="flex justify-between items-center w-full">
            <img src="../assets/pot3.png" class="aspect-square h-16" alt="" />
            <div class="flex w-full gap-10 pl-8">
            <!-- <div class="flex justify-around w-full gap-5"> -->
            <p>Staking</p>
            <p>Learn</p>
            </div>
        </div>

        <!-- middle logo -->
        <div class="outline outline-laser aspect-square h-10 rotate-45 m-10 mx-auto">
        <img 
        class=" -rotate-45" alt="" 
        src="../assets/knot.png" 
        />
        </div>
        
        <!-- end of nav -->
        <div class="flex justify-between items-center w-full">
            <div class="flex justify-end w-full gap-10 pr-8">
            <router-link 
            class="text-red-500 cursor-pointer"
            :to="{name:'profile'}">Profile</router-link>
            <p>Learn</p>
            <p>Learn</p>
            </div>
            <!-- <p>Learn</p> -->
            <Button label="Connect Wallet" />
        </div> 
        </div>
        </div>
    <!-- </div>                           -->
</template>