<template>
  <div
    :style="defaultStyle"
    class="layouts-default"
  >
    <layouts-header />
    <nuxt
      :style="bodyDefaultStyle"
      class="layouts-default--bdoy"
    />
    <layouts-footer />
  </div>
</template>
<script>
import LayoutsHeader from '@/components/layouts/default/header.vue'
import LayoutsFooter from '@/components/layouts/default/footer.vue'
export default {
  name: 'LayoutsDefault',
  components: {
    LayoutsHeader,
    LayoutsFooter
  },
  data () {
    return {
      clientHeight: 500
    }
  },
  computed: {
    defaultStyle () {
      return { 'min-height': this.clientHeight + 'px' }
    },
    bodyDefaultStyle () {
      return {
        'min-height': (this.clientHeight - 260) + 'px'
      }
    }
  },
  beforeMount () {
    this.clientHeight = document.body.clientHeight
  }
  // mounted () {
  //   this.clientHeight = document.body.clientHeight
  // }
}
</script>
<style lang="stylus">
@import '~@/assets/css/common/variables.styl'
.layouts-default
  // overflow-y auto
  &--header
    height 60px
  &--footer
    height 200px
  &--bdoy
    position relative
</style>
