<template>
  <div class="listDetail" ref="scroll" :class="{'anim' : anim === true}">
    <div class="warp">
      <div class="banner">
        <img v-lazy="navDetail.wapBannerUrl" alt="">
      </div>
      <div class="detailTit">
          <span class="text">
            <span>{{navDetail.name}}</span>
            <span>分类</span>
          </span>
        </div>
      <section class="detail">
        <ul class="list">
          <li class="item" v-for="(item) in navDetail.subCateList" :key="item.id">
            <a href="javascript:;">
              <img v-lazy="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        anim: false
      }
    },
    mounted () {
      this.$store.dispatch('getNavDetail', () => {
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    computed: {
      ...mapState(['navDetail'])
    },
    methods: {
      _initScroll () {
        new BScroll (this.$refs.scroll, {
          click: true,
          startY: 0
        }) 
      }
    },
    watch: {
      navDetail: function () {
        this.anim = true
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.anim = false
        }, 800)
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  @keyframes animTop
    30% 
      transform  translate3d(0, px2rem(-100), 0)
    60%
      transform translate3d(0, px2rem(100), 0)
    80%
      transform  translate3d(0, px2rem(-20), 0)
    100%
      transform translate3d() 
  .listDetail
    margin-left px2rem(162)
    height px2rem(1104)
    background #ffffff
    &.anim
      animation animTop .8s  
    .warp
      padding px2rem(30) px2rem(30) px2rem(21)
      height auto
      background #ffffff
      .banner
        width 100%
        height px2rem(192)
        border-radius 4px
        img 
          width 100%
          height 100%
      .detailTit
        height px2rem(108)
        line-height px2rem(108)
        text-align center
        font-size px2rem(24)
        color #333333
        .text
          position relative
          font-size 0
          >span 
            font-size px2rem(24)
          &:before,&:after
            position absolute
            content ''
            top px2rem(-20)
            bottom 0
            margin auto
            height 1px
            width px2rem(40)
            background-color #d9d9d9
          &:before
            left px2rem(-56)
          &:after
            right px2rem(-56)
      .detail
        >.list
          >.item
            display inline-block
            margin-right px2rem(34)
            font-size 0
            width px2rem(144)
            vertical-align top
            &:nth-child(3n)
              margin-right px2rem(-10)
            >a
              color #333333
              >img 
                width px2rem(144)
                height px2rem(144)
              >span 
                display block
                height px2rem(72)
                line-height px2rem(34)
                text-align center
                font-size px2rem(24)            
</style>