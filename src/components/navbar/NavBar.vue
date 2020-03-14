<template>
  <div class="NavBar">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="less">
  .NavBar {
    width: 100%;
    height: 50px;
    padding: 0 14px;
    position: relative;
    overflow: hidden;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none
    }

    .content {
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
    }


  }


</style>