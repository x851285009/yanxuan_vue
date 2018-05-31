<template>
  <section class="moveTopic">
    <div class="moveTit">
      <span class="inner">更多精彩</span>
    </div>
    <a href="javascript:;" class="item" v-for="item in data" :key="item.topicId">
      <img v-lazy="item.itemPicUrl" alt="img">
      <div class="desc">{{item.title}}</div>
    </a>
  </section>
</template>

<script>
  export default {
    props: {
      data: Array
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .moveTopic
    margin 0 px2rem(30) px2rem(30)
    .moveTit
      height px2rem(140)
      display flex
      align-items center
      &:before
        content ''
        display block
        width px2rem(264)
        height 1px
        background #d9d9d9
      &:after
        content ''
        display block
        width px2rem(264)
        height 1px
        background #d9d9d9
      .inner
        margin 0 px2rem(24)
        font-size px2rem(28)
        color #333333
    >.item
      display block
      padding px2rem(24)
      background #ffffff
      color #333333
      margin-bottom px2rem(30)
      >img 
        width px2rem(642)
        height px2rem(360)
      >.desc
        font-size px2rem(28)
        padding px2rem(28) 0
        line-height 1.2
        ellipsis()
</style>