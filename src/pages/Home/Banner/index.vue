<template>
  <div class="wapper">
    <swiper ref="mySwiper" class="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in homeData.focusList" :key="item.id">
        <a href="javascript:;">
          <img v-lazy="item.picUrl" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>  
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        swiperOption: {
          pagination: {
           el: '.swiper-pagination'
          }
        }
      }
    },
    computed: {
      swpier () {
        return this.$refs.mySwiper.swpier
      },
      ...mapState(['homeData'])
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../../common/stylus/mixins.styl'
  .wapper
    width 100%
    margin-top px2rem(148)
    .mySwiper
      width 100%
      height px2rem(400)
      .swiper-slide
        a
          display block
          height  px2rem(400)
          img
            width 100%
            height 100%
  .wapper 
   .swiper-pagination-bullet
      width px2rem(40)
      height px2rem(8)
      background #ffffff
      opacity .4
      border-radius 0
    .swiper-pagination-bullet-active
      opacity 1
</style>