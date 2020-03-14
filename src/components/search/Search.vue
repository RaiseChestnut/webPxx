<template>
  <div class="search">
    <div @click="searchClick">
      <img src="~assets/images/common/search.svg" alt="">
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search",
    props:{
     text:{
       type:String,
       default() {
         return "苹果iphone11";
       }
     }
    },
    methods:{
      searchClick(){
        this.$router.push('/search')
      }
    }
  }
</script>

<style scoped lang="less">
  .search {
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 999999999;

    div {
      position: relative;
      width: 90%;
      height: 38px;
      background-color: #ededed;
      border-radius: 5px;
      img,span{
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      img{
        width: 14px;
        height: 14px;
        left: 30%;
      }
      span{
        left: 50%;
        color: #9c9c9c;
        font-size: 16px;
      }
    }

  }
</style>