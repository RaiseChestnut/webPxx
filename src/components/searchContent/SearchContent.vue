<template>
  <div class="SearchContent">
    <p class="title">
      <slot name="icon"></slot>
      热门发现
    </p>
    <div class="recommend">
      <slot name="recommend"></slot>
      <div v-for="item in recommendlist">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchContent",
    props: {
      recommendlist: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .SearchContent {
    padding: 20px 15px;
    padding-bottom: 0;


    .title {
      color: #9c9c9c;
      font-size: 15px;
      display: flex;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
        margin-right: 5px;

      }
    }

    .recommend {


      div {
        background-color: #f4f4f4;
        border-radius: 32px;
        margin: 8px 10px;
        margin-left: 0;
        display: inline-block;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 100%;
        color: #58595B;

        svg {
          width: 16px;
          height: 16px;
        }

      }
    }
  }
</style>