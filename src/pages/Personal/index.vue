<template>
  <div class="personal">
    <Header></Header>
    <section class="cont">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="btns">
        <div class="btn">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btn dist">
          <i class="iconfont icon-youxiang space"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="quickLoign">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </section>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    components: {
      Header
    },
    created () {
      this.resetTop()
    },
    methods: {
      resetTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .personal
    width 100%
    height 100%
    box-sizing border-box
    padding-top px2rem(88)
    background #f2f5f4
    position relative
    .cont
      >.logo
        text-align center
        padding px2rem(120) 0
        >img
          width px2rem(300)
          height px2rem(104)
      >.btns
        padding 0 px2rem(42) 
        >.btn
          margin-bottom px2rem(40)
          text-align center
          border-radius px2rem(6)
          width 100%
          height px2rem(86)
          line-height px2rem(86)
          vertical-align middle
          text-align center
          font-size px2rem(28)
          color #ffffff
          border 1px solid $main
          background-color $main
          &.dist
            background-color #f2f5f4
            color $main
          >i
            width px2rem(40)
            height px2rem(40)
            box-sizing border-box
            font-size px2rem(40)
            vertical-align inherit
            &.space
              margin-right px2rem(10)
      >.quickLoign
        color #333333
        font-size px2rem(28)
        width 100%
        text-align center
        >i 
          font-size px2rem(28)
          margin-right px2rem(16)
          margin-left px2rem(4)
          color #333333
    .otherLogin
      position absolute
      width 100%
      height px2rem(60)
      left 0
      bottom px2rem(60)
      text-align center
      .itemOther
        height px2rem(26)
        border-right 1px solid #979797
        display inline-block
        text-align center
        color #979797
        padding 0 px2rem(60)
        font-size px2rem(26)
        >i 
          font-size px2rem(26)
        &:last-child
          border-right none
</style>