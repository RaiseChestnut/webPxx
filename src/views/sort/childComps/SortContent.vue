<template>
  <div class="SortContent">
    <scroll class="content" ref="nav">
      <sort-nav :NavName="sortNavName" @navClick="navLiClick" :pCurrentIndex="currentIndex"></sort-nav>
    </scroll>
    <scroll class="content" ref="list" @scroll="listScroll">
      <sort-list :List="sortList" ref="sortList" @listImgLoad=imgLoad :currentI="currentIndex"></sort-list>
    </scroll>
  </div>
</template>

<script>

  import axios from 'axios'
  import {debounce} from 'common/utils'

  import SortList from "./SortList";
  import SortNav from "./SortNav";

  import Scroll from "components/scroll/Scroll";

  export default {
    name: "SortContent",
    data() {
      return {
        sortNavName: [],
        sortList: [],
        totalH: 0,
        currentIndex: 0,
      }
    },
    components: {
      SortNav,
      SortList,
      Scroll
    },
    created() {
      this.getSortData('sortList').then(res => {
        res.data.forEach(item => {
          this.sortNavName.push(item.name)
          this.sortList.push(item)
        })
      })
    },
    methods: {
      getSortData(type) {
        return axios(`/data/sort/${type}`)
      },
      navLiClick(index) {
        this.currentIndex = index
        this.totalH = 0

        if (index === this.$refs.sortList.$el.children.length - 1) {
          this.$refs.list.scrollTo(-this.$refs.sortList.$el.clientHeight + this.$refs.list.$el.clientHeight, 0)
        } else {
          for (let i = 0; i < index; i++) {
            this.totalH += this.$refs.sortList.$el.children[i].scrollHeight
          }
          this.$refs.list.scrollTo(-this.totalH, 0)
        }


      },
      listScroll(pos) {
        const Clist = this.$refs.sortList.$el.children
        if (-pos.y >= this.$refs.sortList.$el.clientHeight - this.$refs.list.$el.clientHeight) {
          this.currentIndex = Clist.length - 1
        } else if (this.currentIndex !== Clist.length - 1 && -pos.y >= Clist[this.currentIndex + 1].offsetTop) {
          if (this.currentIndex === Clist.length - 1) {
            this.currentIndex = Clist.length - 1
          } else {
            this.currentIndex++
          }
        } else if (-pos.y < Clist[this.currentIndex].offsetTop) {
          if (this.currentIndex === 0) {
            this.currentIndex = 0
          } else {
            this.currentIndex--
          }
        }
      },
      imgLoad() {
        this.$refs.list.refresh()
      }

    }
  }
</script>

<style scoped lang="less">
  .SortContent {
    padding-top: 15px;
    position: absolute;
    top: 50px;
    bottom: 50px;
    width: 100%;
    display: flex;
    overflow: hidden;

  }

  .content {
    position: relative;
  }
</style>