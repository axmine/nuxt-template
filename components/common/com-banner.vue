<template>
  <client-only>
    <a-carousel
      v-show="data.length > 0"
      ref="comBanner"
      :arrows="arrows"
      :autoplay="autoplay"
      :style="baseStyle"
      class="com-banner"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-slot:prevArrow>
        <slot name="prev">
          <div class="com-banner-arrow com-banner-prev" />
        </slot>
      </template>
      <template v-slot:nextArrow>
        <slot name="next">
          <div class="com-banner-arrow com-banner-next" />
        </slot>
      </template>
      <template v-if="data.length > 0">
        <div
          v-for="item in data"
          :key="item.src"
          :style="{'background-color': item.bgColor || '#f8f8f8'}"
          class="com-slider-item flex-center"
        >
          <div
            class="item"
            :style="`background-image: url(${item.src}); width: ${width ? `${width}px` : 'auto'}; margin-left: -${width / 2}px`"
          >
            <nuxt-link v-if="item.url" :to="item.url" />
          </div>
        </div>
      </template>
      <template v-else>
        <slot />
      </template>
    </a-carousel>
  </client-only>
</template>
<script>
import { Carousel, Icon } from 'ant-design-vue'
export default {
  name: 'ComBanner',
  components: {
    [Carousel.name]: Carousel,
    [Icon.name]: Icon
  },
  props: {
    data: {
      type: Array,
      default: () => { return [] }
      // { url: '点击后要链接到的地址', src: '图片地址', id: '', title: '', 'professionId' }
    },
    width: {
      type: Number,
      default: 1920
    },
    height: {
      type: Number,
      default: 450
    },
    arrows: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    baseStyle () {
      return { height: Math.abs(this.height) + 'px' || '450px' }
    }
  },
  methods: {
    toUrl (i, bool = false) {
      this.$refs.comBanner.goTo(i, bool)
    }
  }
}
</script>
<style lang="stylus">
.com-banner
  width 100%
  overflow hidden
  .slick-slider
    height 100%
    .slick-list
      height 100%
      .slick-track
        height 100%
        .slick-slide
          height 100%
          &>div
            height 100%
  .com-banner-arrow
    margin-top -40px
    width 50px
    height 80px
    background url('https://sihong-lm.oss-cn-shanghai.aliyuncs.com/pc-client/slider_arrow.png')
    z-index 3
    &:hover
      background url('https://sihong-lm.oss-cn-shanghai.aliyuncs.com/pc-client/slider_arrow.png')
    &.com-banner-prev
      left 0
      background-position 0 0
      &:hover
        background-position 0 -80px
    &.com-banner-next
      right 0
      background-position 50px 0
      &:hover
        background-position 50px -80px
  &-item
    position relative
    width 100%
    height 100%
    overflow hidden
    .item
      position absolute
      left 50%
      height 100%
      background-repeat no-repeat
      background-position center center
      &>a
        display block
        width 100%
        height 100%
</style>
