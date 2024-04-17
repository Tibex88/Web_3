<template>
    <router-link 
            class="cursor-pointer bg-[#1a191e] outline h-fit outline-red-600 w-52 p-3 rounded-2xl relative"
            :to="{name:'ido'}">
            
        <!-- <div class=""> -->
            <div class="relative min-h-64 coutline">
                <!-- borders -->
                <img class="h-20 absolute top-0  block cabsolute " src="./../assets/border(3).svg" alt="">
                <img class="h-20 absolute right-0  [transform:scaleX(-1)] " src="./../assets/border(3).svg" alt="">
                <img class="h-20 absolute bottom-0 left-0 [transform:scaleY(-1)] " src="./../assets/border(3).svg" alt="">
                <img class="h-20 absolute bottom-0 right-0    [transform:scale(-1)] " src="./../assets/border(3).svg" alt="">
                <!-- borders -->   
                
                <div class=" inset-0 m-auto coutline pb-12 outline-red-500 ch-[65%] h-fit   ">
                    <div class="w-full h-36  bg-[url('./assets/bg.png')] bg-cover bg-center oultine outline-white cbg-blue-500">
                    </div>
                    <p class="bg-white text-black px-4 text-center">Public</p>

                    <div class="description">

                        <p>Title</p>
                        <p v-for="i in 5">Features</p>
                    </div>
                        <!-- <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p>
                    <p>Features</p> -->
                </div>
            </div>
        <!-- 
            <div class="content outline outline-blue-400 relative -bottom-full p-10">

            </div> -->
        <!-- </div> -->
    </router-link>
</template>