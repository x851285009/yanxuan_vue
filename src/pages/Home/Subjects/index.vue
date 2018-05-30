<template>
  <section class="GoodsSale">
    <header>
      <a href="javascript:;">
        <span>专题精选</span>
        <i></i>
      </a>
    </header>
    <div class="subjects">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in data" :key="item.id">
          <img :src="item.itemPicUrl" alt="">
          <div class="line">
            <h4 class="title">{{item.title}}</h4>
            <span class="price">{{item.priceInfo}}元起</span>
          </div>
          <div class="desc">{{item.subtitle}}</div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      data: Array
    },
    data () {
      return {
         swiperOption: {
          slidesPerView: 1.2
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

<style lang='stylus' rel='stylesheet/stylus' >
@import '../../../common/stylus/mixins.styl'
  header
    display flex
    flex-flow row nowrap
    align-items center
    justify-content center
    height px2rem(110)
    a
      color #333333
      span 
        font-size px2rem(32)
      i 
        display inline-block
        width px2rem(30)
        height px2rem(30)
        background-image url('../../../assets/images/right.png')
        background-repeat no-repeat
  .subjects
    padding-left  px2rem(30)
    padding-bottom px2rem(36)
    .swiper-wrapper
      padding-right px2rem(30)
      .swiper-slide
        width px2rem(575)
        box-sizing border-box
        padding-right px2rem(21)
        img 
          width 100%
          height px2rem(322)
          border-radius 8px
          margin-bottom px2rem(16)
        .line
          height px2rem(41)
          margin-bottom px2rem(2)
          font-size px2rem(28)
          .title
            ellipsis()
            width px2rem(410)
            float left
            color #333333
          .price
            float right
            color $main
        .desc
          ellipsis()
          height px2rem(36)
          font-size px2rem(24)
          color #7f7f7f
</style>