<template>
  <footer class="layouts-default--footer">
    <div class="container flex-column-between">
      <!-- 默认页脚 -->
      <nav class="foot-nav">
        <a href="http://www.sihongzj.com/" target="_blank">思泓集团</a>
        <a href="http://www.jzlm360.com/" target="_blank">建筑联盟</a>
        <a href="http://www.jianqioa.com/" target="_blank">建企管家</a>
        <a href="http://www.yintairc.com/" target="_blank">银泰人才网</a>
        <a href="http://www.yintairl.com/" target="_blank">银泰人力官网</a>
      </nav>
      <p>江西省南昌市高新区紫阳大道1266号新力方2号楼13A39-44</p>
      <div class="foot-site--info">
        Copyright © 2015-2020 江西云建企科技有限公司. All Rights Reserved 赣ICP备17005830号
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'LayoutsDefaultFooter'
}
</script>
<style lang="stylus">
@import '~@/assets/css/common/variables.styl'
.layouts-default--footer
  width 100%
  background-color #2f3948
  border-top 1px solid #eee
  font-size 14px
  .container
    height 100%
    padding 55px 0
    text-align center
    color #fff
    .foot-nav
      a
        color $fff
        margin 0 $font
</style>
