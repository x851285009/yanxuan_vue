<template>
  <div class="topicShow">
    <Title title="十点一刻"></Title>
    <div class="ShowSwiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <a href="javascript:;">
            <div class="lineTitle">
              <span class="inner">今日话题</span>
            </div>
            <div class="tsTitle">世界杯来了</div>
            <div class="desc">你支持哪个球队</div>
            <div class="joinInfo">4人参与话题</div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;">
            <div class="lineTitle">
              <span class="inner">今日话题</span>
            </div>
            <div class="tsTitle">世界杯来了</div>
            <div class="desc">你支持哪个球队</div>
            <div class="joinInfo">4人参与话题</div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;">
            <div class="lineTitle">
              <span class="inner">今日话题</span>
            </div>
            <div class="tsTitle">世界杯来了</div>
            <div class="desc">你支持哪个球队</div>
            <div class="joinInfo">4人参与话题</div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;">
            <div class="move">
              <span>查看全部话题</span>
              <i></i>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import Title from '../../../components/Title'
  export default {
    data () {
      return {
        swiperOptions: {
          slidesPerView: 1.15,
          spaceBetween: 20
        }
      }
    },
    computed: {
      swpier () {
        return this.$refs.mySwiper.swpier
      }
    },
    components: {
      Title
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .topicShow
    margin-bottom px2rem(20)
    background #ffffff
    padding-left px2rem(20)
    padding-bottom px2rem(20)
    .swiper-slide
      background url('../../../assets/images/qipao.png')
      background-repeat no-repeat
      background-size 100% 100%
      a
        position relative
        display block
        width 100%
        height px2rem(412)
        padding px2rem(38) px2rem(40) px2rem(80)
        box-sizing border-box
        text-align center
        color #333333
        .lineTitle
          display flex
          align-items center
          justify-content center
          margin-bottom px2rem(28)
          &:before
            content ''
            display block
            width px2rem(24)
            height 1px
            background-color #7f7f7f
          &:after
            content ''
            display block
            width px2rem(24)
            height 1px
            background-color #7f7f7f
          span 
            margin 0 px2rem(8)
            font-size px2rem(24)
            color #7f7f7f
        .tsTitle
          font-size px2rem(36)
          font-weight 700
          margin-top px2rem(60)
          margin-bottom px2rem(14)
        .desc
          font-size px2rem(28)
          line-height 1.5
          margin-top px2rem(20)
          margin-bottom px2rem(14)
          ellipsis()
        .joinInfo
          position absolute
          left 50%
          transform translateX(-50%)
          bottom px2rem(78)
          width px2rem(500)
          height px2rem(48)
          font-size px2rem(24)
          text-align center
      &:last-child
        background none
        a
          position relative
          width px2rem(580)
          height px2rem(385)
          border 10px solid #e6e6e6
          padding 0
          background-color #fafafa
          >.move
            position absolute
            top 0
            right 0
            left 0
            bottom 0
            margin auto
            width px2rem(240)
            height px2rem(38)
            display flex
            align-items center
            >span 
              color #7f7f7f
              font-size px2rem(32)
              line-height px2rem(38)
              margin-right px2rem(18)
            >i 
              display inline-block
              width px2rem(30)
              height px2rem(30)
              background url('../../../assets/images/right.png')
              background-repeat no-repeat
              background-size 100% 100%
</style>