<template>
  <div class="shopCart">
    <Title title="购物车"></Title>
    <ul class="explain">
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>48小时快速退款</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="cart">
      <div class="img"></div>
      <div class="txt">
        <div class="inner">
          <div class="txtCon">去添加点什么吧</div>
          <div class="txtBtn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from '../../components/Title'
  export default {
    components: {
      Title
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
  .shopCart
    position relative
    height 100%
    >h3
      font-size px2rem(36)
      line-height px2rem(88)
    >.explain
      z-index 1
      height px2rem(70)
      padding 0 px2rem(30)
      display flex
      flex-flow row nowrap
      align-items center
      justify-content space-between
      >.expItem
        display flex
        align-items center
        font-size px2rem(24)
        color #666666
        >i 
          display inline-block
          width px2rem(10)
          height px2rem(10)
          font-size px2rem(10)
          color #d9d9d9
          margin-right px2rem(8)
    .cart
      position absolute
      top px2rem(-50)
      right 0
      bottom 0
      left 0
      margin auto
      height px2rem(300)
      text-align center
      >.img 
        display inline-block
        width px2rem(248)
        height px2rem(248)
        margin-bottom px2rem(8)
        background url('../../assets/images/cart.png')
        background-position center
        background-repeat no-repeat
      >.txt
        font-size px2rem(28)
        line-height 1
        color #7f7f7f
        >.inner
          margin-top px2rem(-20)
          >.txtCon
            margin-bottom px2rem(50)
            line-height 1
            font-size px2rem(28)
            color #999999
          >.txtBtn
            margin auto
            width px2rem(480)
            height px2rem(92)
            font-size px2rem(30)
            line-height px2rem(92)
            color #ffffff
            background-color $main
            border-radius px2rem(4)
</style>