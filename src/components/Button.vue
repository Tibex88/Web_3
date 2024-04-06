<script setup>

defineProps({
    label: String
})
    </script>

<template>
    
                <button class="bg-transparent outline rounded-none whitespace-wrap md:whitespace-nowrap text-xs">
                    {{ label }}    
                </button>
</template>