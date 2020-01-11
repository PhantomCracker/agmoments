<template>
    <div>
        <Navbar />
        <Hero />
    </div>
</template>

<script>
    import Hero from "../components/Hero";
    import Navbar from "../components/Navbar";
    export default {
        name: "Moments",
        components: {Navbar, Hero}
    }
</script>

<style scoped>

</style>