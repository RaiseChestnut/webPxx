<template>
  <div class="MainTabBar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/images/tabs/home.webp" alt="" slot="image">
        <img src="~assets/images/tabs/ishome.webp" alt="" slot="image-active">
        <span slot="text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/follow">
        <img src="~assets/images/tabs/follow.webp" alt="" slot="image">
        <img src="~assets/images/tabs/isfollow.webp" alt="" slot="image-active">
        <span slot="text">关注</span>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <img src="~assets/images/tabs/sort.webp" alt="" slot="image">
        <img src="~assets/images/tabs/issort.webp" alt="" slot="image-active">
        <span slot="text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/chat">
        <img src="~assets/images/tabs/chat.webp" alt="" slot="image">
        <img src="~assets/images/tabs/ischat.webp" alt="" slot="image-active">
        <span slot="text">聊天</span>
      </tab-bar-item>
      <tab-bar-item path="/me">
        <img src="~assets/images/tabs/me.webp" alt="" slot="image">
        <img src="~assets/images/tabs/isme.webp" alt="" slot="image-active">
        <span slot="text">个人</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./TabBar";
  import TabBarItem from "./TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {}
    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>