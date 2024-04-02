<template>
    <div class="relative scale-150">
        <img src="../assets//pot3.png" class="h-20 aspect-square z-10" alt="">
        <div class="diamond absolute inset-0 m-auto bottom-16 w-10 z-0 aspect-square outline outline-2 outline-red-800 rotate-45"></div>
        <div class="lines absolute w-full bottom-16  h-16 flex  justify-around px-5">
            <div v-for="i in 4" class="line border border-1 h-full inline rounded-2xl">
                <div class="spark outline outline-1 rotate-45 relative -top-2"></div>
            </div>
            <!-- <div></div>
            <div></div> -->
        </div>
    </div>
</template>