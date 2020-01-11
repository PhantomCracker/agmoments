<template>
    <div class="container-fluid">
        <div class="background-landing">
            <div class="top-center">
                <h1> Welcome to <br> A&G </h1>
            </div>
            <div class="top-left">

            </div>
            <div class="top-right">

            </div>
            <div class="bottom-left">

            </div>
            <div class="bottom-right">

            </div>
            <h2>We are offering the best <br> wedding and parties services</h2>
            <div class="options-landing">
                <div class="moments">
                    <img src="../assets/images/landing-page/logo-moments.png" alt="moments" />
                    <router-link to="/moments"><h3>Moments</h3></router-link>
                </div>
                <div class="events">
                    <img src="../assets/images/landing-page/logo-events.png" alt="events"/>
                    <router-link to="/events"><h3>Events</h3></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingPage"
    }
</script>

<style scoped lang="scss">
    .top-center {
        background-size: contain;
        background: url("../assets/images/landing-page/top-center.png") no-repeat center;
        min-height: 50vh;
        min-width: 100vw;
        position: absolute;
        top: 0;
    }
    .top-left {
        background-size: contain;
        background: url("../assets/images/landing-page/top-left.png") no-repeat top left;
        min-height: 50vh;
        width: 50vw;
    }
    .top-right {
        background-size: contain;
        background: url("../assets/images/landing-page/top-right.png") no-repeat top right;
        min-height: 50vh;
        width: 50vw;
        position: absolute;
        top: 0;
        right: 0;
    }
    .bottom-left {
        background-size: contain;
        background: url("../assets/images/landing-page/bottom-left.png") no-repeat bottom left;
        min-height: 50vh;
        width: 50vw;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .bottom-right {
        background-size: contain;
        background: url("../assets/images/landing-page/bottom-right.png") no-repeat bottom right;
        min-height: 50vh;
        width: 50vw;
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>