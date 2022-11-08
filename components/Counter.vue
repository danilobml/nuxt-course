<template>
    <div>
        <button @click="increment">Increment</button>
        <div>{{count}}</div>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script setup>
const count = ref(0)

function increment() {
  count.value +=1
}

function decrement() {
  count.value -=1
}
</script>

<style scoped>

</style>