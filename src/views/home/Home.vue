<template>
  <div>
    <search></search>
    <main-nav-bar></main-nav-bar>
    <scroll class="content" @scroll="scrolling" ref="scroll" v-if="$route.params.type==='hot'">
      <home-carousel :imglist="imgList"></home-carousel>
      <main-hot-nav :navlist="navList"></main-hot-nav>
      <hot-special :speciallist="specialList"></hot-special>
      <good-list :hotGoodsList="hotGoodsList"></good-list>
    </scroll>
    <div v-else>数据暂无</div>
    <back-top :isShow='backTopShow' @click.native="backTopClick"></back-top>
  </div>
</template>
<script>
  import Search from "components/search/Search";
  import MainNavBar from "components/navbar/MainNavBar";
  import HomeCarousel from "./childComps/HomeCarousel";
  import MainHotNav from "./childComps/MainHotNav";
  import HotSpecial from "components/hotspecial/HotSpecial";
  import GoodList from "components/goodlist/GoodList";
  import BackTop from "components/backtop/BackTop";
  import Scroll from "components/scroll/Scroll";
  import axios from 'axios'

  export default {
    name: "Chat",
    data() {
      return {
        imgList: [],
        navList: [],
        specialList: [],
        hotGoodsList: [],
        backTopShow: false
      }
    },
    components: {
      MainNavBar,
      Search,
      MainNavBar,
      HomeCarousel,
      MainHotNav,
      HotSpecial,
      GoodList,
      BackTop,
      Scroll
    },
    created() {
      this.getHomeData('HomeSwiper').then(res => this.imgList = res.data.msg)
      this.getHomeData('HomeNavs').then(res => this.navList = res.data.msg)
      this.getHomeData('hotSpecialCarousels').then(res => this.specialList = res.data.msg)
      this.getHomeData('hotGood').then(res => this.hotGoodsList = res.data)
    },
    methods: {
      getHomeData(type) {
        return axios(`/data/home/${type}`)
      },
      scrolling(pos) {
        -pos.y > 1000 ? this.backTopShow = true : this.backTopShow = false
      },
      backTopClick() {
        this.$refs.scroll.scrollTop(500)
      }
    }
  }
</script>

<style scoped>
  .content {
    position: absolute;
    top: 100px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>