<template>
     <div class="decor">
      <!-- outer border -->
      <div class="flex w-full h-full justify-between absolute overflow-hidden">
         
        <!-- mid -->
        <div class="w-full h-4 bg-red-800 absolute inset-0"></div>
       
        <!-- sides -->
        <div 
        v-for="i in 2"
        class="w-4 h-[60vh]  bg-red-800 relative overflow-hidden">
          <div class="aspect-square w-5 h-10 bg-[url('./assets/splash.png')] bg-cover mix-blend-difference rotate-180 absolute -bottom-2"></div>
        </div>

      </div> 

      <!-- inner border -->
      <div class="p-6 flex justify-between absolute  w-full">
        
        <!-- <div> -->
          <img src="../assets/border(3).svg" class="aspect-auto h-24 nborder-t-4 border-red-800" alt="" />
        <!-- </div> -->
                
        <!-- <div> -->
          <img src="../assets/border(3).svg" class="aspect-auto h-24 nborder-t-4 border-red-800 -scale-x-[1]" alt="" />
        <!-- </div> -->
      </div>

  </div>
</template>