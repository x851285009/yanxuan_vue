<template>
  <header class="search">
    <div class="inner">
      <div class="ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共9723款好物</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .search
    position fixed
    top 0
    left 0
    z-index 5
    width 100%
    height px2rem(88)
    .inner
      display flex
      align-items center
      padding 0 px2rem(30)
      width 100%
      height px2rem(88)
      position relative
      background-color #ffffff
      &:after
        content ''
        position: absolute
        background-color #d9d9d9
        left 0
        width 100%
        height 1px
        transform-origin 50% 100% 0
        bottom 0
      .ipt
        width 100%
        display flex
        align-items center
        justify-content center
        height px2rem(56)
        font-size px2rem(28)
        background-color #ededed
        border-radius px2rem(8)
        >.icon
          display inline-block
          vertical-align middle
          width px2rem(28)
          height px2rem(28)
          background url('../../../assets/images/search.png')
          background-repeat no-repeat
          margin-right px2rem(10)
        >.placeholder
          font-size px2rem(27)
          color #666666
</style>