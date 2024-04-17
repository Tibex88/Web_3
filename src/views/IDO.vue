<template>
    <!-- <p class="text-5xl">profile</p> -->

    <div class=" flex flex-1 ">

        <div class="flex flex-col gap-10 coutline">

            <div class="cbg-blue-500 w-fit pl-10 pr-10 rounded-2xl overflow-hidden sticky">

                <Timeline />
            </div>
            
            <div class="cbg-red-500 w-fit h-fit p-10 flex flex-col gap-5">
                <p class="mb-10">Please connect your wallet to participate</p>
                <!-- <Wallet /> -->
                <button class="outline outline-red-700 px-10">Connect Wallet</button>
            </div>

        </div>

        <div class="w-full flex flex-col gap-4">
            <div class="flex justify-between items-center coutline">

                <div class="flex gap-3 items-center ">
                    <div class="bg-[url('./assets/bg.png')] bg-white bg-contain w-20 aspect-square outline bg-center bg-no-repeat"></div>
                    <p>Plea FInance</p>
                </div>
                <div class="flex gap-5 h-fit text-black">

                    <button class="bg-white ">Public IDO</button>
                    <button class="bg-white" >Bronze at min tier</button>
                </div>
            </div>

            <div class="flex gap-5 w-fit">
                <p class="p-2 rounded-lg outline outline-red-500 bg-red-500 text-white w-fit">Project INfo</p>
                <p class="p-2 rounded-lg outline outline-red-500 w-fit">Swap and Claim</p>
            </div>
            
            <div class="flex gap-5 flex-1 justify-between">
                <div
                class=" cbg-red-400 bg-black px-5 rounded-xl w-full h-fit p-4"
                v-for="i in 2"
                >
            <div 
            v-for="i in data"
            class="flex justify-between" >
                <p>{{i.key}}</p>
                <p>{{i.value}}</p>
            </div>
        </div>
            </div>

        <div v-for="i in 10" class="coutline h-full px-10">
            <h3 class="text-3xl font-bold underline">Roadmap</h3>
            <p v-for="i in 10">
                {{ info }}
            </p>
        </div>
        </div>
    </div>
</template>

<script setup>
import Timeline from '../components/Timeline.vue';
import Wallet from '../components/Wallet.vue'

const data = [
{
    key: 'Price per token',
    value:"0.017 USDT per $PLENA"
    },{
    key: 'Swap Amount',
    value:"0.017 USDT per 11,764,705 $PLENA"
    },{
    key: 'Total Raise',
    value:"200,000"
    },{
    key: 'Claim Type',
    value:"On chain"
    },{
    key: 'Refund Term ',
    value:"7 days"
    },
]

const info = `lena Connect stands out as a groundbreaking initiative in the crypto investment field, launching an
Account Abstraction Software Development Kit (SDK) that sets new standards for easy integration and
user experiences within the decentralized ecosystem. By utilizing Account Abstraction, Plena Connect
gives dApps the ability to improve user control over funds, increase security, and make transaction
processes more efficient. As the leading AA SDK available, Plena Connect is set to change the way
developers create blockchain user experiences, providing an easy, cost-effective, and complete
solution for dApps aimed at improving user interactions without the usual complexities and costs.`

</script>