import Vue from 'vue'
import { Modal, message, notification } from 'ant-design-vue'

Vue.prototype.$message = message
Vue.prototype.$modal = Modal
Vue.prototype.$notification = notification

export default function ({ store }) {
  Vue.mixin({
    computed: {
      isLogin () {
        return store.state.token !== ''
      }
    }
  })
}
