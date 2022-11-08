<template>
    <div class="grid grid-cols-4 gap-4">
        <NuxtLink to="/iphone/iphone-12" class="shadow-lg text-center mt-10 border-rounded-lg">
            <h1>Iphone 12</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone12.jpg" alt="iphone12">
            </div>
        </NuxtLink>
        <NuxtLink to="/iphone/iphone-13" class="shadow-lg text-center mt-10 border-rounded-lg">
            <h1>Iphone 13</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone13.jpg" alt="iphone13">
            </div>
        </NuxtLink>
        <NuxtLink to="/iphone/iphone-14" class="shadow-lg text-center mt-10 border-rounded-lg">
            <h1>Iphone 14</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone14.jpg" alt="iphone14">
            </div>
        </NuxtLink>
        <NuxtLink to="/iphone/iphone-14pro" class="shadow-lg text-center mt-10 border-rounded-lg">
            <h1>Iphone 14 Pro</h1>
            <div class="flex justify-center">
                <img width="200" src="/images/iphone14pro.jpg" alt="iphone14 pro">
            </div>
        </NuxtLink>
    </div>

</template>

<script setup>
useHead({
    title: 'Iphones'
})
</script>