<template>
  <div class="GoodList">
    <good-list-item v-for="item in hotGoodsList" :hotGoodListItem="item"></good-list-item>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";

  export default {
    name: "GoodList",
    components: {
      GoodListItem
    },
    props: {
      hotGoodsList: {
        type: Array,
        default() {
          return []
        }
      }
    }

  }
</script>

<style scoped>
  .GoodList {
    padding: 8px 12px;
    padding-bottom: 0;
  }

</style>