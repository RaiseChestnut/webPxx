<template>
  <div class="GoodListItem">
    <div class="showImg">
      <img :src="hotGoodListItem.hd_thumb_url" alt="">
    </div>
    <div class="goodInfoList">
      <p>{{hotGoodListItem.goods_name}}</p>
      <div class="goodInfo">
        <span class="symbol">￥</span>
        <span class="price">{{hotGoodListItem.normal_price |price}}</span>
        <span class="tip">{{hotGoodListItem.sales_tip}}</span>
        <div class="user">
          <img :src="item.avatar" alt="" v-for="item in hotGoodListItem.bubble">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      hotGoodListItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      price(value) {
        return parseFloat(value / 100).toFixed(2)
      }
    }
  }
</script>

<style scoped lang="less">
  .GoodListItem {
    width: 100%;
    background-color: #fff;
    display: flex;
    margin-bottom: 8px;

    .showImg {
      img {
        width: 168px;
      }
    }

    .goodInfoList {
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        font-size: 14px;
        color: #151516;
      }

      .goodInfo {
        display: flex;
        align-items: center;

        .symbol, .price {
          color: #e02e24;
          font-weight: bold;
        }

        .symbol {
          font-size: 12px;
        }

        .price {
          font-size: 18px;
        }

        .tip {
          margin-left: 5px;
          font-size: 13px;
          color: #9c9c9c;
          flex: 1;
        }

        .user {
          display: flex;
          position: relative;

          img {
            width: 22px;
            height: 22px;
            border: 1px solid #fff;
            border-radius: 50%;

            &:last-child {
              transform: translateX(-50%);

            }
          }
        }
      }
    }
  }

</style>