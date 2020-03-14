<template>
  <div class="SortNav">
    <ul>
      <li v-for="(item,index) in NavName" :class="{active:index===currentIndex}" @click="liClick(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SortNav",
    props: {
      NavName: {
        type: Array,
        default() {
          return []
        }
      },
      pCurrentIndex: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      liClick(index) {
        this.currentIndex = index
        this.$emit('navClick', index)
      }
    },
    watch: {
      pCurrentIndex() {
        this.currentIndex = this.pCurrentIndex
      }
    }
  }
</script>

<style scoped lang="less">
  .SortNav {
    height: 100%;
    font-size: 15px;
    color: #666666;

    ul {
      background-color: #fafafa;
      width: 90px;

      li {
        padding: 12px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .active {
    background-color: #fff;
    color: #e02e24;
    border-left: 4px solid #e02e24;

  }
</style>