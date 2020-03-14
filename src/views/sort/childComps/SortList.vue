<template>
  <div class="SortList">
    <div class="item" v-for="item in List">
      <div class="title">
        <span>{{item.name}}</span>
        <span class="more">查看更多></span>
      </div>
      <div class="banner" v-if="item.banner">
        <img :src="item.banner" alt="" width="100%">
      </div>
      <div class="goods">
        <div class="goodList" v-for="goods in item.items">
          <img :src="goods.icon" alt="" @load="imgLoad">
          <span>{{goods.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SortList",
    props: {
      List: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {

        this.$emit('listImgLoad')
      }
    }
  }
</script>

<style scoped lang="less">
  .SortList {
    color: #151516;
    font-size: 13px;
    flex: 1;

    .item {
      width: 100%;

      padding-bottom: 15px;

      .title {
        display: flex;
        justify-content: space-between;
        font-size: 15px;
        padding: 10px 12px;

        span {
          color: #58595B;
        }

        .more {
          color: #959595;
          font-size: 14px;
        }

      }

      .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .goodList {
          width: 33%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: 10px;

          img {
            width: 65%;
          }
        }
      }
    }


  }
</style>