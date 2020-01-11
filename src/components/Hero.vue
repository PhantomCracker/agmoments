<template>
    <div class="container-fluid">
        <img src="../assets/images/hero-image.png" alt="hero background"/>
        <nav>

        </nav>
    </div>
</template>

<script>
    export default {
        name: "Hero"
    }
</script>

<style scoped lang="scss">
    .container-fluid {
        background: url("../assets/images/hero-background.png") no-repeat center;
        background-size: cover;
        min-height: 100vh;
    }
</style>