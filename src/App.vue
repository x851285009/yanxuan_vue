<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer'
  export default {
    components: {
      Footer
    },
    mounted () {
      this.$store.dispatch('getNavData')
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import './common/stylus/mixins.styl'
  @import '../static/css/react.css'
  body
    background-color #f4f4f4
  #app 
    width 100%
    height 100%
  .v-enter
    opacity 0
  .v-enter-to
    opacity 1
  .v-enter-active
    transition 1s
  .v-leave
    opacity 1
  .v-leave-to
    opacity 0
  .v-leave-active
    transition0.7s
</style>
