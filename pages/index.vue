<template>
  <div class="home-index">
    <com-banner />
    <div class="container">
      Home
    </div>
  </div>
</template>

<script>
import ComBanner from '@/components/common/com-banner.vue'
export default {
  name: 'HomeIndex',
  components: {
    ComBanner
  },
  async asyncData ({ app }) {
    const query = {
      pageNum: 1,
      pageSize: 10
    }
    const { data } = await app.$http.post('/article/lists', query)
    return { data }
  },
  data () {
    return {
      data: {}
    }
  },
  methods: {
    async handleClick () {
      const query = {
        pageNum: 1,
        pageSize: 10
      }
      const data = await this.$http.post('/article/lists', query)
      console.log(data)
    }
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
<style lang="stylus">
.home-index
  p
    cursor pointer
</style>
