<template>
    <div>
        <article class="sidebar">
            <p>Dashboard</p>
            <p>Settings</p>
        </article>
        <slot></slot>
    </div>
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
}

</style>