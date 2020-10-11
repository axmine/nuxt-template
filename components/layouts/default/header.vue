<template>
  <header class="layouts-default--header">
    <div class="container flex-between-center">
      <!-- 默认头部 -->
      <div class="left flex-align-center">
        <nuxt-link
          class="logo flex-center"
          to="/"
        >
          <!-- logo -->
          <img src="https://sihongzj-com.oss-cn-shanghai.aliyuncs.com/logo.png" alt="logo">
        </nuxt-link>
        <nav class="nav flex-align-center">
          <nuxt-link
            to="/"
            class="flex-center"
          >
            <span>首页</span>
          </nuxt-link>
          <nuxt-link
            to="/exam"
            class="flex-center"
          >
            <span>题库</span>
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="flex-center"
          >
            <span>资讯</span>
          </nuxt-link>
        </nav>
      </div>
      <div class="right">
        <span>登录/注册</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'LayoutsHeader'
}
</script>
<style lang="stylus">
@import '~@/assets/css/common/variables.styl'
.layouts-default--header
  width 100%
  background-color $fff
  border-bottom 1px solid #eee
  .container
    padding 13px 0
    height 100%
  .left
    height 100%
    .logo
      display block
      // padding 3px 0
      height 100%
      width 140px
      background-color #fff
      img
        width auto
        height 100%
    .nav
      margin-left ($font * 2)
      height 100%
      &>a
        margin-left ($font * 2)
        // width 100px
        height 100%
        color $black
        text-align center
        border-bottom 2px solid transparent
        &.nuxt-link-exact-active
        &:hover
          // color $primary
          border-bottom-color $black
</style>
