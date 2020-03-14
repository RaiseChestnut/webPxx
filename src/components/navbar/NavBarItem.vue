<template>

  <div class="item" :class="{active:isActive}">{{text}}</div>

</template>

<script>
  export default {
    name: "NavBarItem",
    props: {
      text: {
        type: String,
        default() {
          return ''
        }
      },
      isType: {
        type: String,
        default() {
          return "";
        }
      }
    },
    computed:{
      isActive(){
        return this.isType === this.$route.params.type
      }
    }
  }
</script>

<style scoped lang="less">
  .item {
    margin-right: 20px;
    width: 32px;
    font-size: 16px;
    color: #444;
    height: 100%;
    line-height: 50px;

    &
    :last-child {
      margin-right: 14px;
    }

  }
  .active{
    color: #e02e24;
    font-weight: 700;
    border-bottom: 2px solid #e02e24;
  }
</style>