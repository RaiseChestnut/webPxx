<template>
  <div class="HomeCarousel">
    <swipe :autoplay="2500">
      <swipe-item v-for="item in imglist" :autoplay="3000" indicator-color="white">
        <img :src="item.imgUrl" alt="" width="100%">
      </swipe-item>
    </swipe>
  </div>
</template>

<script>

  import {Swipe, SwipeItem} from 'vant';

  export default {
    name: "HomeCarousel",
    components: {
      Swipe,
      SwipeItem
    },
    props: {
      imglist: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">

</style>