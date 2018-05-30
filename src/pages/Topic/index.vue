<template>
  <div class="topic">
    <Header></Header>
    <Banner></Banner>
    <TopicList></TopicList>
    <Recommend></Recommend>
    <TopicShow></TopicShow>
    <Recommend></Recommend>
    <section class="look">
      <Title title="严选LOOK"></Title>
      <a href="javascript:;">
        <img src="../../assets/images/test6.jpg" alt="">
        <div class="authorContainer">
          <div class="author">
            <div class="authorPic">
              <img src="../../assets/images/test5.png" alt="">
            </div>
            <div class="authorName">丁磊</div>
          </div>
        </div>
      </a>
    </section>
    <section class="moveTopic">
      <div class="moveTit">
        <span class="inner">更多精彩</span>
      </div>
      <a href="javascript:;" class="item">
        <img src="../../assets/images/mock1.jpg" alt="">
        <div class="desc">制定一份自己的晨间清单，唤醒一整天的活力</div>
      </a>
      <a href="javascript:;" class="item">
        <img src="../../assets/images/mock2.jpg" alt="">
        <div class="desc">白色情人节送礼好物</div>
      </a>
      <a href="javascript:;" class="item">
        <img src="../../assets/images/mock3.jpg" alt="">
        <div class="desc">白果炖鸡汤好喝的秘诀</div>
      </a>
    </section>
  </div>
</template>

<script>
  import Banner from './Banner'
  import TopicList from './TopicList'
  import Recommend from './Recommend'
  import TopicShow from './TopicShow'
  import Title from '../../components/Title'
  import Header from '../../components/Header'
  export default {
    components: {
      Banner,
      TopicList,
      Recommend,
      TopicShow,
      Title,
      Header
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .topic
    margin-bottom px2rem(100)
    .look
      background #ffffff
      margin-bottom px2rem(20)
      img 
        width 100%
        height auto
      .authorContainer
          padding px2rem(20) 0 px2rem(20) px2rem(20)
          margin-bottom px2rem(25)
          .author
            display flex
            align-items center
            font-size px2rem(20)
            .authorPic
              width px2rem(46)
              height px2rem(46)
              border-radius 50%
              margin-right px2rem(8)
              border 1px solid #d9d9d9
              overflow hidden
            .authorName
              color: #333;
              font-size px2rem(28)
              letter-spacing px2rem(4)
              margin-left px2rem(20)
              ellipsis()
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
