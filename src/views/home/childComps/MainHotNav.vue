<template>
  <div class="MainHotNav">
    <hot-nav>
      <hot-nav-item v-for="item in navlist" :navItem="item"></hot-nav-item>
    </hot-nav>
  </div>
</template>

<script>
  import HotNav from "components/hotnav/HotNav";
  import HotNavItem from "components/hotnav/HotNavItem";

  export default {
    name: "MainHotNav",
    components: {
      HotNav, HotNavItem
    },
    props: {
      navlist: {
        type: Array,
        default() {
          return []
        }
      }
    },

  }
</script>

<style scoped>

</style>