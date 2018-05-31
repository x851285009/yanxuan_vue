<template>
  <div class="home">
    <section class="head">
      <header>
        <div class="logo"></div>
        <div class="search">
          <i></i>
          <span>搜索商品, 共9789款好物</span>
        </div>
      </header>
      <list-scroll></list-scroll>
    </section>
    <Banner></Banner>
    <div class="explain">
      <div class="expItem">
        <i></i>
        <span>网易自营品牌</span>
      </div>
      <div class="expItem">
        <i></i>
        <span>30天无忧退货</span>
      </div>
      <div class="expItem">
        <i></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <section class="GoodsSale">
      <header>
        <a href="javascript:;">
          <span>品牌制造商直供</span>
          <i></i>
        </a>
      </header>
      <div class="goods">
        <ul>
          <li v-for="(item, index) in homeData.tagList" :key="item.id" v-if="index<=3">
            <a href="javascipt:;">
              <div class="ctn">
                <h4 class="title">{{item.name}}</h4>
                <span class="proce1">{{item.floorPrice}}</span><span class="proce2">元起</span>
              </div>
              <img v-lazy="item.picUrl" alt="img">
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="indexFloor">
      <div class="move new">
        <a href="javascript:;" class="moveCont">
          <span class="title">新品首发</span>
          <div class="all">
            <span>查看全部</span>
            <i></i>
          </div>
        </a>
      </div>
      <GoodsList :data="homeData.newItemNewUserList"></GoodsList>
    </section>
    <section class="indexFloor">
      <div class="move hot">
        <a href="javascript:;" class="moveCont">
          <span class="title">人气推荐.好物精选</span>
          <div class="all">
            <span>查看全部</span>
            <i></i>
          </div>
        </a>
      </div>
      <GoodsList :data="homeData.popularItemList"></GoodsList>
    </section>
    <div class="countDown">
      <a href="javascript:;">
        <div class="itemLeft">
          <div class="title">严选限时购</div>
          <div class="countNum">
            <span class="time">03</span>
            <span class="colon">:</span>
            <span class="time">56</span>
            <span class="colon">:</span>
            <span class="time">01</span>
          </div>
          <div class="nextTitle">下一场 22:00  开始</div>
        </div>
        <div class="itemRight">
          <img src="../../assets/images/test2.png" alt="">
          <div class="price">
            <span class="now">¥42</span>
            <span class="old">¥49</span>
          </div>
        </div>
      </a>
    </div>
    <div class="weal">
      <a href="javascript:;">
        <img src="../../assets/images/move.jpg" alt="">
      </a>
    </div>
    <Subjects :data="homeData.topicList"></Subjects>
    <GoodsShow :data="homeData.cateList"></GoodsShow>
    <div class="copyright">
      <div class="content">
        <div class="bd">
          <a href="javascript:;" class="goApp">下载APP</a>
          <a href="javascript:;">电脑版</a>
        </div>
        <p class="desc">
          <span>网易公司版权所有 © 1997-2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ListScroll from './ListScroll'
  import Banner from './Banner'
  import GoodsList from './GoodsList'
  import Subjects from './Subjects'
  import GoodsShow from './GoodsShow'
  export default {
    components: {
      ListScroll,
      Banner,
      GoodsList,
      Subjects,
      GoodsShow
    },
    mounted () {
      this.$store.dispatch('getHomeData')
      this.$store.dispatch('getTopicData')
    },
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .indexFloor
    background #ffffff
  .home
    letter-spacing 1px
    margin-bottom px2rem(100)
    .head
      background-color #ffffff
      position fixed
      top 0
      left 0
      right 0
      z-index 5
      header
        height px2rem(56)
        display flex
        padding px2rem(16) px2rem(30)
        display flex
        align-items center
        .logo
          width px2rem(140)
          height px2rem(40)
          background url('../../assets/images/icons.png')
          background-position -4px 236px
          background-size 108%
          margin-right px2rem(20)
          display inline-block
        .search
          flex-grow 1
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          width px2rem(532)
          height px2rem(56)
          background-color #ededed
          border-radius 6px
          i
            display inline-block
            width px2rem(28)
            height px2rem(28)
            background url('../../assets/images/search.png')
            margin-right px2rem(6px)
          span
            color #666666
            font-size px2rem(26)
    .explain
      box-sizing border-box
      width 100%
      height px2rem(72)
      display flex
      background #ffffff
      padding 0 px2rem(30)
      flex-direction row
      flex-wrap nowrap
      align-items center
      justify-content space-around
      font-size px2rem(24)
      margin-bottom px2rem(20)
      .expItem
        vertical-align middle
        span
          display inline-block
        i
          display inline-block
          width px2rem(32)
          height px2rem(32)
          background-image url('../../assets/images/hook.png')
          background-repeat no-repeat
          background-size cover
    .GoodsSale
      background #ffffff
      margin-bottom px2rem(20)
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
            background-image url('../../assets/images/right.png')
            background-repeat no-repeat
      .goods
        padding-bottom px2rem(8)
        ul
          position relative
          margin  0 px2rem(16)
          height px2rem(468)
          overflow hidden
          li
            display inline-block
            position relative
            float left
            margin-bottom px2rem(8)
            width px2rem(355)
            height px2rem(236)
            overflow hidden
            background-color #f4f4f4
            &:nth-child(odd)
              margin-right px2rem(8)
            >a
              color #333333
              .ctn
                position absolute
                left 0
                top 0
                padding px2rem(20) 0 0 px2rem(20)
                width 100%
                z-index 4
                font-size 0
                .title
                  ellipsis()
                  font-size px2rem(28)
                  line-height px2rem(34)
                  margin-bottom px2rem(6)
                .proce1,.proce2
                  font-size px2rem(28)
                  line-height px2rem(34)
                  margin-bottom px2rem(6)
              >img 
                width 100%
                height 100%
    .move
      width 100%
      height px2rem(260)
      margin-bottom px2rem(32)
      position relative
      &.new
        background-image url('../../assets/images/new.png')
        background-size px2rem(750) px2rem(260)
        a
          color #8ba0b6
        .all 
          background #d8e5f1
      &.hot
        background-image url('../../assets/images/hot.png')
        background-size px2rem(750) px2rem(260)
        a
          color #B4A078
        .all 
          background #F4E9CB
      .moveCont
        position absolute
        width px2rem(334)
        height px2rem(126)
        top 50%
        left 50%
        margin-left px2rem(-167)
        margin-top px2rem(-63)
        text-align center
        font-size px2rem(36)
        .all
          position relative
          margin px2rem(16) auto 0
          width px2rem(240)
          height px2rem(56)
          font-size 0
          line-height px2rem(56)
          span 
            font-size px2rem(28)
          i 
            display inline-block
            width px2rem(10)
            height px2rem(22)
            background-image url('../../assets/images/move.png')
            background-size px2rem(10) px2rem(22)
            margin-left px2rem(6)
    .countDown
      width 100%
      box-sizing border-box
      height px2rem(320)
      padding px2rem(30) px2rem(40) px2rem(30) px2rem(56)
      margin-bottom px2rem(20)
      background #ffffff
      overflow hidden
      a
        display block
        width 100%
        height 100%
        clearFix()
      .itemLeft
        float left
        padding-top px2rem(40)
        .title
          font-size px2rem(36)
          line-height px2rem(36)
          margin-bottom px2rem(24)
          letter-spacing px2rem(12)
          color #333333
        .countNum
          display inline
          font-size 0
          .time
            display inline-block
            font-size px2rem(32)
            text-align center
            width px2rem(62)
            height px2rem(56)
            line-height px2rem(56)
            border-radius px2rem(4)
            color #ffffff
            background #444444
          .colon
            display inline-block
            color #333333
            font-size 30px
            font-weight 700
            width px2rem(20)
            text-align center
        .nextTitle
          margin-top px2rem(40)
          color #333333
          font-size px2rem(24)
          height px2rem(24)
          line-height px2rem(24)
      .itemRight
        width px2rem(320)
        height px2rem(320)
        position relative
        float right 
        img 
          width 100%
          height 100%
        .price
          width px2rem(96)
          height px2rem(96)
          position absolute
          background-color rgba(244,143,24,.95)
          border-radius 50%
          bottom px2rem(36)
          right px2rem(20)
          color #ffffff
          text-align center
          display flex
          flex-direction column
          justify-content center
          span 
            font-size px2rem(24)
    .weal
      width 100%
      height px2rem(300)
      margin-bottom px2rem(20)
      overflow hidden
      img 
        width 100%
    .copyright
      border-top 1px solid rgba(0,0,0,.15);
      background-color #414141
      .content
        text-align center
        padding px2rem(54) px2rem(20) px2rem(28) px2rem(20)
        .bd
          a
            display inline-block
            width px2rem(170)
            height px2rem(60)
            border: 1px solid #999;
            color #ffffff
            font-size px2rem(24)
            line-height px2rem(62)
            &.goApp
              margin-right px2rem(50)
        .desc
          margin-top px2rem(36)
          color #999999
          line-height px2rem(32)
          span 
            font-size px2rem(24)
</style>