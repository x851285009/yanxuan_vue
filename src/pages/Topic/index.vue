<template>
  <div class="topic">
    <Header></Header>
    <Banner :data="topicData.banner"></Banner>
    <TopicList :data="topicData.column"></TopicList>
    <Recommend :data="topicData.recommend"></Recommend>
    <TopicShow :data="topicData.tenfifteen"></TopicShow>
    <Recommend :data="topicData.zhen"></Recommend>
    <section class="look">
      <Title title="严选LOOK"></Title>
      <a href="javascript:;">
        <img v-lazy="topicData.yxLook.picUrl" alt="">
        <div class="authorContainer">
          <div class="author">
            <div class="authorPic">
              <img v-lazy="topicData.yxLook.avatar" alt="">
            </div>
            <div class="authorName">{{topicData.yxLook.nickname}}</div>
          </div>
        </div>
        <div class="desc">{{topicData.yxLook.content}}</div>
      </a>
    </section>
    <MoveTopic :data="topicData.yxWeek"></MoveTopic>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Banner from './Banner'
  import TopicList from './TopicList'
  import Recommend from './Recommend'
  import TopicShow from './TopicShow'
  import Title from '../../components/Title'
  import Header from '../../components/Header'
  import MoveTopic from './MoveTopic'
  export default {
    components: {
      Banner,
      TopicList,
      Recommend,
      TopicShow,
      Title,
      Header,
      MoveTopic
    },
    mounted () {
      this.$store.dispatch('getTopicData')
    },
    computed: {
      ...mapState(['topicData'])
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
      .desc
        font-size px2rem(28)
        color #7f7f7f
        line-height 1.6
        padding px2rem(10) px2rem(30) px2rem(20)
</style>
