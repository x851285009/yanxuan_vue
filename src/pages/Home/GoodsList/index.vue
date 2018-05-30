<template>
  <div class="goodsWrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in data" :key="item.id">
        <a href="javascript:;">
          <div class="image">
            <img :src="item.primaryPicUrl" alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="nameDoc">{{item.simpleDesc}}</div>
          <div class="price">¥{{item.retailPrice}}</div>
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:;">
          <span>查看全部</span>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array
    },
    data () {
      return {
         swiperOption: {
          slidesPerView: 2.42,
          spaceBetween: 40
        }
      }
    },
    computed: {
      swpier () {
        return this.$refs.mySwiper.swpier
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../common/stylus/mixins.styl'
  .goodsWrap
    width 100%
    height px2rem(440)
    overflow hidden
    margin-bottom px2rem(20)
    background #ffffff
    .swiper-wrapper
      padding-left px2rem(30)
      .swiper-slide
        width px2rem(280) !important
        height px2rem(440)
        .image
          width px2rem(280)
          height px2rem(280)
          background #f4f4f4
          z-index 0
          img 
            width 100%
            height 100%
        .name
          margin px2rem(10) 0
          padding 0 px2rem(10)
          color #333333
          font-size px2rem(28)
          line-height px2rem(34)
          ellipsis()
        .nameDoc
          margin-bottom px2rem(14)
          line-height px2rem(30)
          font-size px2rem(24)
          padding 0 px2rem(10)
          color #7f7f7f
          ellipsis()
        .price
          padding 0 px2rem(10)
          color $main
          line-height 1
          font-size px2rem(28)
        &:last-of-type
          border px2rem(8) solid #f4f4f4
          height px2rem(264)
          line-height px2rem(264)
          text-align center
          span
            font-size px2rem(28)
            color #333333
</style>