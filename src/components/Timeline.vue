<script setup>
import Range from './Range.vue';
const data = 
    [{
        title: 'upcoming',
        from: '01.07.2021',
        to: '01.07.2021'
    },
    {
        title: 'swap',
        from: '01.07.2021',
        to: '01.07.2021',
    },{
        title: 'filled',
        from: '01.07.2021',
        to: '01.07.2021',
    },{
        title: 'claimable',
        from: '01.07.2021',
        to: '01.07.2021',
    },{
        title: 'ended',
        from: '01.07.2021',
        to: '01.07.2021',
    }
    ]
</script>

<template>
  <div class=" text-white text-start flex flex-col gap-2">
    <p class="text-3xl  w-full">Swap Progress</p>
    <!-- 
    <input class="text-red-400 w-full" type="range" name="" id="">
    <p class=" flex justify-between my-0">
      <span> (86%)</span>
      <span> 1,976,074/2,272,727</span>
    </p> -->
    <Range />
  
  <ol className="border-l border-neutral-300 dark:border-neutral-500">
      <li v-for="(item, index) in data">
        <div className="flex-start flex items-center pt-1">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-red-700"></div>
          <h4 className="mb-1 text-sm font-semibold capitalize p-1">
            {{item.title}}
          </h4>  
        </div>
        <div className="mb-2 ml-4 mt-2">
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                <span> Interest Period </span>
                <span class="block">
                    From {{item.from}} to  {{item.to}}
                </span>
            </p>
        </div>
      </li>
      
  </ol>

</div>

      <!-- <Wallet /> -->

</template>