<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li v-for="(name, index) in navlist" :key="index" :class="{'active':current === index}" @click="currentIndex(index)">
        <span>{{name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScorll from 'better-scroll'
  export default {
    data () {
      return {
        navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScorll (this.$refs.wrapper, {
          scrollX: true,
          click: true
        })
      })
    },
    methods: {
      currentIndex (index) {
        this.current = index
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../common/stylus/mixins.styl'
  .wrapper
    width 100%
    height 100%
    overflow hidden
    display flex
    flex-direction row
    flex-flow nowrap
    ul
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      padding 0 px2rem(30)
      background #ffffff
      height px2rem(60)
      align-items center
      li
        width px2rem(135)
        height px2rem(60)
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        &.active
          span 
            color $main
            position relative
            &:after{
              content ''
              left 0
              bottom 0
              position absolute
              width 100%
              height px2rem(4)
              background-color $main
            }
        span
          display inline-block
          letter-spacing px2rem(2)
          padding 0 px2rem(16)
          line-height px2rem(60)
          font-size px2rem(26)
          text-align center
          color #333333
</style>