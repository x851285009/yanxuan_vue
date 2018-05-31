<template>
  <div class="wapper">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <a href="javascript:;">
          <div class="content">
            <div class="subTitle">{{item.subTitle}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
          <img v-lazy="item.picUrl" alt=""> 
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          slidesPerView: 1.15,
          centeredSlides: true,
          onInit: function (swiper) {
					  swiper.slides[1].className = 'swiper-slide swiper-slide-active'
          },
          loop: true,
          spaceBetween: 20,
          autoplay: true
        }
      }
    },
    computed: {
      swpier () {
        return this.$refs.mySwiper.swpier
      }
    },
    props: {
      data: Array
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .wapper
    margin-top px2rem(88)
    padding px2rem(24) 0
    width px2rem(750)
    box-sizing border-box
    background #ffffff
    .swiper-slide
      width 100%
      a
        display block
        height px2rem(385)
        img 
          width 100%
          height px2rem(385)
          border-radius px2rem(8)
        .content
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto
          display flex
          align-items center
          justify-content center
          flex-direction column
          width px2rem(466)
          height px2rem(198)
          background-color rgba(255, 255, 255, .9)
          .subTitle
            position relative
            font-size px2rem(20)
            color #7f7f7f
            line-height px2rem(30)
            padding  0 px2rem(8)
            &:before,&:after
              content ''
              position absolute
              top 0
              bottom 0
              margin auto
              width px2rem(24)
              height 1px
              background-color #999999
            &:before
              left px2rem(-24)
            &:after
              right px2rem(-24)
          .title
            font-size px2rem(32)
            line-height px2rem(48)
            color #333333
            margin-top px2rem(16)
            font-weight 700
          .desc
            font-size px2rem(24)
            color #333333
            line-height px2rem(36)
            margin-top px2rem(4)
</style>
