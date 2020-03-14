<template>
  <div class="BackTop" :class="{show:isShow}">
    <img src="~assets/images/common/backtop.png" alt="">
    <span>顶部</span>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    props: {
      isShow: {
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .BackTop {
    position: fixed;
    transition: all 0.5s linear;
    opacity: 0;
    right: 30px;
    bottom: 0px;

    img {
      width: 42px;
    }

    span {
      width: 100%;
      position: absolute;
      font-size: 8px;
      bottom: 5px;
      text-align: center;
      color: #333;
    }
  }

  .show {
    right: 30px;
    bottom: 80px;
    opacity: 1;

  }
</style>