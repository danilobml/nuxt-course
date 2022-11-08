<template>
    <div class="container flex flex-col m-5">
        <h1 class="text-2xl font-bold ">Profile</h1>
        <img width="100" src="/images/profilepic.png" alt="profile pic">
        <h2 class="mt-3 text-xl">Name: Eve Holt</h2>
        <h2 class="mt-3 text-lg">Email: eve.holt@reqres.in</h2>
        <!-- <button @click="navigateTo('/cart')">Cart</button> -->
    </div>
</template>

<script>
    definePageMeta({
        // layout: 'sidebar',
        // 
        // middleware: () => {
        //     const auth = useAuth()
        //     return auth.value.isAuthenticated
        // }
        // middleware: ["auth"]
    })
</script>
