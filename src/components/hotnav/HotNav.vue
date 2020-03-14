<template>
  <div class="HotNav">
    <div class="viewPort" @touchstart=viewTouchStat @touchmove="viewTouchMove" @touchend='viewTouchEnd'>
      <div class="navList" ref="navList">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotNav",
    data() {
      return {
        touchStartX: 0,
        touchMoveX: 0,
        currentLeft: 0,
        distance: 0,
        navListStyle: {},
        maxLeft: 0
      }
    },
    mounted() {

    },
    methods: {
      viewTouchStat(e) {
        this.touchStartX = e.targetTouches[0].clientX
        this.navListStyle = this.$refs.navList.style
      },
      viewTouchMove(e) {
        this.navListStyle.transition = ''
        this.touchMoveX = e.targetTouches[0].clientX
        this.distance = this.touchMoveX - this.touchStartX
        this.navListStyle.left = this.currentLeft + this.distance + 'px'
      },
      viewTouchEnd() {
        this.currentLeft = parseInt(this.navListStyle.left)
        this.maxLeft = this.$refs.navList.clientWidth - document.documentElement.clientWidth
        if (this.currentLeft > 0) {
          this.navListStyle.transition = 'all 0.3s linear'
          this.navListStyle.left = 0 + 'px'
          this.currentLeft = 0
        } else if (-this.currentLeft > this.maxLeft) {
          this.navListStyle.transition = 'all 0.3s linear'
          this.navListStyle.left = -this.maxLeft + 'px'
          this.currentLeft = -this.maxLeft
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .viewPort {
    width: 100vw;
    overflow: hidden;
    position: relative;
    height: 150px;

    .navList {
      top: 0;
      left: 0;
      padding: 8px 0 0 0;
      width: 584px;
      display: flex;
      flex-wrap: wrap;
      position: absolute;
    }

  }

</style>