<template>
  <div class="HotNavItem">
    <img :src="navItem.imgUrl" alt="">
    <span>{{navItem.title}}</span>
  </div>
</template>

<script>
  export default {
    name: "HotNavItem",
    props: {
      navItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .HotNavItem {
    width: 73px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 55%;
    }

    span {
      font-size: 12px;
      color: #666;
    }
  }

</style>