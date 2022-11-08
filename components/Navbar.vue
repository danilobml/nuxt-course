<template>
    <nav class="bg-purple-900 flex p-3 shadow-lg text-lg text-white justify-between">
        <div class="flex">
            <NuxtLink class="mx-3" to="/">Home</NuxtLink>
            <NuxtLink class="mx-3" to="/about">About</NuxtLink>
            <NuxtLink class="mx-3" to="/iphone">Iphones</NuxtLink>
        </div>
        <div class="flex">
            <p class="mx-3" v-if="auth.isAuthenticated">Cart ({{cart.length}})</p>
            <NuxtLink class="mx-3" v-if="auth.isAuthenticated" to="/profile">Profile</NuxtLink>
            <p class="mx-3" v-if="auth.isAuthenticated"><span @click="logout">Logout</span></p>
            <NuxtLink class="mx-3" v-else to="/login">Login</NuxtLink>
        </div>
    </nav>
</template>

<script setup>

const cart = useCart()
const auth = useAuth()

function logout() {
    auth.value.isAuthenticated = false
}

</script>

<style scoped>
span {
    cursor: pointer;
}
</style>