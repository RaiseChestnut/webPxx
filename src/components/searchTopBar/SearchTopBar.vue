<template>
  <div class="content">
    <div class="topnav">
      <div class="back" @click="backClick"><img src="~assets/images/common/back.svg" alt=""></div>
      <div class="search-inp">
        <input type="text" placeholder="牛奶整箱">
        <img src="~assets/images/common/search.svg" alt="">
      </div>
      <div class="submit">
        搜索
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SeachTopBar",
    methods: {
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    background-color: #fff;
    position: relative;
    z-index: 9999;

    .topnav {
      height: 50px;
      display: flex;
      align-items: center;

      .back {
        padding: 0 15px;

        img {
          width: 20px;
        }
      }

      .search-inp {
        flex: 1;
        height: 70%;
        position: relative;

        input {
          width: 100%;
          background-color: #ededed;
          padding: 0 30px;
          outline: none;
          border: none;
          height: 100%;
          border-radius: 8px;

        }

        input::-webkit-input-placeholder {
          color: #999
        }

        img {
          width: 15px;
          position: absolute;
          top: 50%;
          left: 8px;
          transform: translateY(-50%);
        }
      }

      .submit {
        font-size: 16px;
        color: #e02e24;
        margin: 0 15px;
      }
    }
  }
</style>