<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  height: 100vh;
  font-size: 14px;

  cursor: default;
}
body {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
}
</style>
