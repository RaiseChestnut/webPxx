<template>
  <div class="tabbaritem" @click="itemClick">
    <slot name="image" v-if="!isActive"></slot>
    <slot name="image-active" v-else></slot>
    <div :class="{isTextActvie:isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  import router from "../../router";

  export default {
    name: "TabBarItem",
    data() {
      return {}
    },
    methods: {
      itemClick() {

        if (this.path === '/home') {
          this.$router.push(this.path + '/' + this.$store.state.currentType)
        } else {
          this.$router.push(this.path)
        }

      }
    },
    props: {
      path: {
        type: String,
        default() {
          return ''
        }
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
  }
</script>

<style scoped lang="less">
  .tabbaritem {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #666;

    img {
      width: 23px;
      height: 23px;
    }
  }

  .isTextActvie {
    color: #e02e24;
  }
</style>