<template>
    <div class="container flex m-10"> 
        <img witdh="300" height="500" :src="`/images/iphone${name}.jpg`" :alt="`iphone ${name}`">
        <div class="mx-10 text-center">
            <h1 class="text-purple-400 fw-bold text-2xl mt-3">Iphone {{name}}</h1>
            <button v-if="!isInCart()" @click="addToCart" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48 h-12">Buy Now</button>
            <button v-if="isInCart()" @click="removeFromCart" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48 h-12">Remove from cart</button>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const cart = useCart()

const name = computed(()=>{
    return route.params.name
})

useHead({
    title: `Iphone ${route.params.name}`
})

function isInCart() {
    return !!cart.value.find((ct) => ct.name === route.params.name)
}

function addToCart() {
    if(!isInCart()){
        cart.value.push({
            name: route.params.name,
        })
        alert('Order successful!')
    }
}

function removeFromCart() {
    const found = cart.value.find((ct) => ct.name === route.params.name)
    if(found){
        cart.value = cart.value.filter((ct) => ct.name !== route.params.name)
        alert('Item removed!')
    }
}

</script>