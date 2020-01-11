<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/css/custom.scss";

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
  body {
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
