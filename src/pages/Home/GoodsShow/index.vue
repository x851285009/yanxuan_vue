<template>
  <div>
    <section class="goodsShow" v-for="items in data" :key="items.id">
      <Title :title="items.name+'好物'"></Title>
      <ul class="list" >
        <li class="item" v-for="(item, index) in items.itemList" v-if="index<=6" :key="item.id">
          <a href="javascript:;">
            <img :src="item.listPicUrl" alt="">
            <div class="desc">{{item.simpleDesc}}</div>
            <div class="name">{{item.name}}</div>
            <div class="price">￥{{item.retailPrice}}</div>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;" class="move">
            <p>更多{{items.name}}好物</p>
            <i></i>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Title from '../../../components/Title'
  export default {
    props: {
      data: Array
    },
    components: {
      Title
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../common/stylus/mixins.styl'
    .goodsShow
      background #ffffff
      margin-bottom px2rem(20)
      .list
        position relative
        z-index 0
        overflow hidden
        .item
          float left
          overflow hidden
          width 50%
          box-sizing border-box
          background #ffffff
          &:nth-child(odd)
            padding 0 px2rem(10) px2rem(33) px2rem(20)
          &:nth-child(even)
            padding 0 px2rem(20) px2rem(33) px2rem(10)
          a
            display block
            height px2rem(504)
            font-size 0
            overflow hidden
            img 
              width px2rem(345)
              height px2rem(345)
              border-radius px2rem(4)  0 0 px2rem(4)
              background-color #f4f4f4
            .desc
              width px2rem(345)
              padding px2rem(20) px2rem(10)
              background-color #f1ece2
              border-radius 0 px2rem(4) px2rem(4) 0 
              color #9f8a60
              letter-spacing 0
              line-height px2rem(30)
              font-size px2rem(24)
              ellipsis()
            .name
              margin-top px2rem(10)
              padding 0 px2rem(10)
              color #333333
              font-size px2rem(27)
              line-height px2rem(48)
              ellipsis()
            .price
              line-height 1
              font-size px2rem(32)
              color $main
              padding 0 px2rem(10)
            &.move
              border-radius px2rem(4)
              padding px2rem(128) 0
              box-sizing border-box
              display flex
              flex-direction column
              align-items center
              justify-content center
              background #f4f4f4
              height px2rem(416)
              p
                color #333333
                font-size px2rem(32)
                line-height px2rem(32)
                margin-bottom px2rem(50)
              i 
                display block
                background url(../../../assets/images/gsmove.png)
                vertical-align middle
                background-repeat no-repeat
                background-size 100% 100%
                width px2rem(66)
                height px2rem(66) !important
</style>