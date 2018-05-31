<template>
  <div class="topicList">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <a href="javascript:;">
          <img v-lazy="item.picUrl" alt="">
          <div class="tNum">
            <span class="tNumCon">{{item.articleCount}}</span>
          </div>
          <div class="title">{{item.title}}</div>
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
          slidesPerView: 3.8,
          spaceBetween: 20
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

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../common/stylus/mixins.styl'
  .topicList
    height px2rem(226)
    background #ffffff
    margin-bottom px2rem(20)
    padding px2rem(32) 0  px2rem(28) px2rem(30)
    .swiper-slide:last-of-type
      padding-right px2rem(40)
    a
      display block
      width px2rem(164)
      height px2rem(220)
      position relative
      img 
        width px2rem(164)
        height px2rem(164)
        border-radius px2rem(4)
        margin-bottom px2rem(22)
      .tNum
        position absolute
        top 0
        right 0
        color #ffffff
        width px2rem(116)
        height px2rem(32)
        border-radius 0 px2rem(4) 0 0
        background url('../../../assets/images/bg.png') no-repeat
        background-size 100%
        .tNumCon
          position absolute
          top 0
          right px2rem(8)
          width px2rem(150)
          height px2rem(32)
          line-height px2rem(32)
          font-size px2rem(24)
          text-align right
      .title
        color #333333
        font-size px2rem(24)
        line-height 1
        text-align center
        height px2rem(30)
</style>