<script setup>
import Wallet from '../components/Wallet.vue'
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
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
          <li v-for="(item, index) in data">
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <h4 className="mb-1.5 text-xl font-semibold capitalize">
                {{item.title}}
              </h4>  
            </div>
            <div className="mb-6 ml-4 mt-2">
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                    <span> Interest Period </span>
                    <span class="block">
                        From {{item.from}} to  {{item.to}}
                    </span>
                </p>
              <!-- <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p> -->
            </div>
          </li>
         
      </ol>

      <Wallet />

</template>