<template>
     <div class="container m-auto flex flex-col justify-center align-center mt-5">
        <h1 class="mb-10 text-3xl">Welcome to IPhoneStore!</h1>
        <h2 class="text-xl mb-5"><span @click="navigateTo('/login')">Login</span> and start buying!</h2>
        <img width="350" src="/images/iphone14pro.jpg" alt="iphone 14 pro">
    </div>
</template>

<script>

</script>

<style scoped>
span {
    text-decoration: underline;
    cursor: pointer;
}
</style>
