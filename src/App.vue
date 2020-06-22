<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link exact to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/service">Service</router-link></li>
      </ul>
    </nav>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
  @import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';
</style>