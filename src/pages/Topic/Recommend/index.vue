<template>
<div class="recommend">
  <Title title="为你推荐"></Title>
  <div class="itemMajor">
    <a href="javascript:;">
      <img src="../../../assets/images/move.jpg" alt="">
      <div class="info">
        <div class="line1">
          <div class="Linetitle">如何做清新的白衣少年</div>
          <div class="price">9.9元起</div>
        </div>
        <div class="line2">少年感养成必备好物，每满149立减20元</div>
      </div>
    </a>
  </div>
  <div class="items">
    <div class="topicInfo">
      <div class="line1">
        <div class="topicTitle">今年世界杯喝什么？</div>
      </div>
      <div class="line2">
        <div class="cont">拉格啤酒8.5折特价，买即赠小龙虾优惠券</div>
      </div>
    </div>
    <div class="topicPic">
      <img src="../../../assets/images/test6.jpg" alt="">
      <div class="topicTag">
        <div class="tag">丁磊的好货推荐</div>
      </div>
    </div>
  </div>
  <div class="items">
    <div class="topicInfo">
      <div class="line1">
        <div class="topicTitle">今年世界杯喝什么？</div>
      </div>
      <div class="line2">
        <div class="cont">拉格啤酒8.5折特价，买即赠小龙虾优惠券</div>
      </div>
    </div>
    <div class="topicPic">
      <img src="../../../assets/images/test6.jpg" alt="">
      <div class="topicTag">
        <div class="tag">丁磊的好货推荐</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Title from '../../../components/Title'
  export default {
    components: {
      Title
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .recommend
    padding 0 px2rem(30) px2rem(40)
    margin-bottom px2rem(20)
    background #ffffff
    .itemMajor
      margin-bottom px2rem(30)
      position relative
      color #333333
      border 1px solid #d9d9d9
      border-radius px2rem(8)
      overflow hidden
      img 
        height px2rem(386)
        border-radius px2rem(8) px2rem(8) 0 0
      .info 
        box-sizing border-box
        padding px2rem(24) px2rem(20) px2rem(67)
        color #333333
        .line1
          margin-bottom px2rem(30)
          display flex
          justify-content space-between
          align-items center
          line-height 1.2
          height px2rem(43)
          .Linetitle
            flex 1
            margin-right px2rem(170)
            font-size px2rem(36)
            ellipsis()
          .price
            line-height 1
            font-size px2rem(32)
            text-align center
            min-width px2rem(115)
        .line2
          font-size px2rem(28)
          color #7f7f7f
          line-height 1.2
          ellipsis()
    .items
      display flex
      background #ffffff
      color #333333
      border 1px solid #d9d9d9
      box-sizing border-box
      border-radius px2rem(4)
      margin-bottom px2rem(30)
      .topicInfo
        flex 1
        display flex
        flex-direction column
        justify-content center
        overflow hidden
        position relative
        padding-left px2rem(20)
        padding-right px2rem(30)
        .line1
          margin-bottom px2rem(14)
          line-height 1.2
          box-sizing border-box
          >.topicTitle
            height px2rem(38)
            ellipsis()
            font-size px2rem(32)
            margin-right px2rem(30)
        .line2
          .cont
            font-size px2rem(24)
            line-height 1.5
            color #7f7f7f
            display -webkit-box
            display block
            -webkit-line-clamp: 2;
            ellipsis()
      .topicPic
        position relative
        width px2rem(280)
        height px2rem(272)
        overflow hidden
        img 
          width 100%
        >.topicTag
          position absolute
          top px2rem(10)
          left px2rem(10)
          height px2rem(36)
          font-size 0
          >.tag
            display inline-block
            padding 0 px2rem(16)
            height px2rem(34)
            font-size px2rem(24)
            line-height px2rem(34)
            border 1px solid #d9d9d9
            border-radius px2rem(20)
            color #333333
            background-color rgba(255,255,255,.9)
      &:last-child
        margin-bottom 0
</style>