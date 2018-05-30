<template>
  <header>
    <div class="row">
      <div class="home" @click="$router.push('/home')">
        <i class="iconfont icon-shouye2"></i>
      </div>
      <div class="logo"></div>
      <div class="right">
        <div class="search">
          <a href="javascript:;">
            <i></i>
          </a>
        </div>
        <div class="cart">
          <a href="javascript:;">
            <i></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
header 
  height px2rem(88)
  position fixed
  left 0
  top 0
  right 0
  z-index 5
  background #fafafa
  &:after
    content ''
    position absolute
    left 0
    bottom 0
    width 100%
    height 1px
    background-color #d9d9d9
    transform scaleY(0.5)
  .row
    box-sizing border-box
    width px2rem(750)
    height px2rem(88)
    padding-left px2rem(24)
    padding-right px2rem(16)
    overflow hidden
    display flex
    align-items center
    justify-content space-between
    position relative
    >.home
      width px2rem(48)
      height px2rem(44)
      display inline-block
      vertical-align middle
      i 
        font-size px2rem(48)
    .logo
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      width px2rem(172)
      height px2rem(54)
      display inline-block
      vertical-align middle
      background url('../../assets/images/icons.png')
      background-repeat no-repeat
      background-size px2rem(172) px2rem(398)
      background-position: 0px -126px;
    .right
      box-sizing border-box
      text-align center
      a
        display inline-block
        width px2rem(64)
        height px2rem(64)
      .search
        margin-right px2rem(20)
        float left
        i 
          width px2rem(64)
          height px2rem(64)
          display block
          background-repeat: no-repeat;
          vertical-align middle
          background url('../../assets/images/icons.png')
          background-repeat no-repeat
          background-size px2rem(172) px2rem(398)
          background-position: 0px -330px;
      .cart
        float left
        i 
          width px2rem(64)
          height px2rem(64)
          display block
          background-repeat: no-repeat;
          vertical-align middle
          background url('../../assets/images/icons.png')
          background-repeat no-repeat
          background-size px2rem(172) px2rem(398)
          background-position: 0px 3px;
</style>