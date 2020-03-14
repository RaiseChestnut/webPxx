<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      };
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3
      });
      this.scroll.on('scroll', pos => this.$emit('scroll', pos))
    },
    methods: {
      scrollTop(time) {
        this.scroll.scrollTo(0, 0, time)
      },
      scrollTo(y, time) {
        this.scroll.scrollTo(0, y, time)
      },
      refresh() {
        this.scroll.refresh()
      }
    }
  };
</script>

<style scoped>
</style>
