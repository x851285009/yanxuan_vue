<template>
  <div class="listMenu">
    <div class="inner" ref="scroll">
      <ul>
        <li class="item" :class="{'active' : navIndex === index}" v-for="(name, index) in navList" :key="index" @click="currentIndex(index)">
          <a href="javascript:;">{{name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    // data () {
    //   return {
    //     navIndex: 3 // 默认的选中状态
    //   }
    // },
    mounted () {
      this.$store.dispatch('getNavList', () => {
        this.$nextTick(() => { // 列表数据更新显示后执行
          this._initScroll()
        })
      })
    },
    computed: {
      ...mapState(['navList', 'navIndex'])
    },
    methods: {
      _initScroll () {
        new BScroll (this.$refs.scroll, {
          click: true,
          startY: 0
        }) 
      },
      currentIndex (index) {
        this.$store.dispatch('setNavIndex', index)
        this.$store.dispatch('getNavDetail')
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .listMenu
    position fixed
    top px2rem(88)
    left 0
    bottom 0
    z-index 4
    width px2rem(162)
    background-color #ffffff
    &:after 
      content ''
      position absolute
      background-color rgba(0,0,0,.15)
      top 0
      bottom 0
      width 1px
      -webkit-transform-origin 100% 50% 0
      transform-origin 100% 50% 0
      right 0
    .inner
      width 100%
      max-height px2rem(1104)
      padding-top px2rem(40)
      overflow hidden
      >ul
        padding-bottom px2rem(138)
        >.item
          width 100%
          height px2rem(76)
          line-height px2rem(76)
          text-align center
          border none
          &.active
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              bottom 0
              width px2rem(6)
              background-color $main
            >a
              font-size px2rem(36)
              line-height px2rem(76)
              font-weight 700
              color $main
          +.item
            margin-top px2rem(20)
          >a
            display block
            color #333333
            font-size px2rem(28)
            line-height px2rem(56)
            ellipsis()
</style>