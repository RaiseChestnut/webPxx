<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tabbar {
    width: 100%;
    height: 50px;
    display: flex;
    background: #fff;
    position: fixed;
    bottom: 0;
  }
</style>