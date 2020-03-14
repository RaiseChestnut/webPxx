<template>
  <div class="hotSpecial">
    <div class="bg">
      <img :src="item.imgUrl" alt="" v-for="(item,index) in speciallist" v-if="index==0">
    </div>
    <swipe class="swipe" :show-indicators=false :autoplay="1500">
      <swipe-item v-for="(item,index) in speciallist" v-if="index!=0">
        <img :src="item.imgUrl" alt="">
      </swipe-item>
    </swipe>
  </div>
</template>

<script>

  import {Swipe, SwipeItem} from 'vant';

  export default {
    name: "hotSpecial",
    props: {
      speciallist: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swipe, SwipeItem
    }
  }
</script>

<style scoped lang="less">
  .hotSpecial {
    position: relative;

    .bg {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .swipe {
      position: absolute;
      width: 99px;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        width: 100%;
      }
    }
  }


</style>