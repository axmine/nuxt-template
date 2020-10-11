<template>
  <div class="error-index flex-center">
    <div class="container">
      <div
        v-if="error.statusCode === 404"
        class="error-404"
      >
        <img :src="aError[error.statusCode].image">
        <!-- Page not found -->
        <p>{{ aError[error.statusCode].title }}</p>
        <!-- {{ error }} -->
      </div>
      <h1 v-else>
        An error occurred
      </h1>
    </div>
  </div>
</template>

<script>
import Img404 from '@/assets/img/404.png'
export default {
  props: {
    error: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      aError: {
        404: {
          image: Img404,
          title: '呃，页面君好像迷路了！'
        }
      }
    }
  },
  layout: 'default' // you can set a custom layout for the error page
}
</script>
<style lang="stylus">
@import '~@/assets/css/common/variables'
.error-index
  background-color #f5f5f5
  .error-404
    // padding 60px 0 120px
    img
      margin 0 auto
      width 410px
      height auto
    p
      margin-top 64px
      font-size 20px
      font-weight normal
      text-align center
</style>
