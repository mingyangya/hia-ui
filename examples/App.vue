<template>
  <div id="app">
    <HiaButton> sss </HiaButton>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('mounted', window)
  }
}
</script>

<style>

@import url(./assets/css/typo.css);
@import url(./assets/css/tailwind.scss);
body,html {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background: #3d3c3c; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
