<template>
    <div class="grid grid-cols-4 gap-4">
        <NuxtLink v-for="(iphone, index) in iphones" :key={index} :to="`iphone/iphone-${iphone}`" class="shadow-lg text-center mt-10 border-rounded-lg">
            <h1>Iphone {{iphone}}</h1>
            <div class="flex justify-center">
                <img width="200" :src="`/images/iphone${iphone}.jpg`" :alt="`iphone ${iphone}`">
            </div>
        </NuxtLink>
    </div>
    
</template>

<script setup>

useHead({
    title: 'Iphones'
})

const iphones = ["12", "13", "14", "14pro"]
// const { data } = useFetch('/api/iphone-data')
// const iphones = data.value

</script>