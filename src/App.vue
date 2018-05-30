<template>
  <div id="app">
    <router-view/>
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
</style>
