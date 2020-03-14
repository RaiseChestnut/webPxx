<template>
  <div>
    <search></search>
    <sort-content></sort-content>
  </div>
</template>

<script>
  import Search from "components/search/Search";
  import SortContent from "./childComps/SortContent";

  export default {
    name: "Chat",
    components: {
      Search,
      SortContent
    }
  }
</script>

<style scoped>

</style>