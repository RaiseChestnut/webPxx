<template>
  <div class="MainNavBar">
    <nav-bar>
      <nav-bar-item v-for="item in content" :text="item.text"
                    :is-type="item.type"
                    @click.native="itemClick(item.type)"></nav-bar-item>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "./NavBar";
  import NavBarItem from "./NavBarItem";

  export default {
    name: "MainNavBar",
    data() {
      return {
        content: [
          {
            text: '热门', type: 'hot'
          },
          {
            text: '手机', type: 'phone'
          },
          {
            text: '女装', type: 'nvzhuang'
          },
          {
            text: '鞋包', type: 'xiebao'
          },
          {
            text: '男装', type: 'nanzhang'
          },
          {
            text: '母婴', type: 'muying'
          },
          {
            text: '百货', type: 'baihuo'
          },
          {
            text: '内衣', type: 'neiyi'
          },
          {
            text: '电器', type: 'dianqi'
          },
          {
            text: '水果', type: 'shuiguo'
          },
          {
            text: '家具', type: 'jiaju'
          },
          {
            text: '美妆', type: 'huazhuang'
          },
          {
            text: '家装', type: 'jiazhuang'
          },
          {
            text: '运动', type: 'yundong'
          },
          {
            text: '汽摩', type: 'qimo'
          },
          {
            text: '医药', type: 'yiyao'
          },
          {
            text: '电脑', type: 'diannao'
          },
          {
            text: '海淘', type: 'haitao'
          }
        ],
      }
    },
    components: {
      NavBar,
      NavBarItem
    },
    methods: {
      itemClick(type) {
        this.$store.dispatch("changeCurrentType",type)
        this.$router.replace('/home/' + type)
      }
    }
  }
</script>

<style scoped>
  .MainNavBar {
    width: 100%;
    height: 50px;
    background-color: #red;
  }

</style>