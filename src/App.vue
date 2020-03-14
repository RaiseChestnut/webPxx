<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "components/tabbar/MainTabBar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }

  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
  }
</style>
