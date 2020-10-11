import helper from '@axmine/helper'
import config from '@/config/index.js'
import { getHeaderCookie } from '@/assets/js/common.js'
const keys = config.keys
export const actions = {
  nuxtServerInit ({ state }, { req }) {
    if (!state.token) {
      const token = getHeaderCookie(req.headers.cookie)[keys.token] || ''
      this.dispatch('SetToken', token)
    }
  },

  // setStore
  SetStore ({ commit }, data) {
    commit('SET_STORE', data)
  },
  SetToken ({ commit }, token) {
    if (helper.getType(token) !== 'string') {
      throw new Error('token 必须是一个字符串')
    }
    if (process.client) {
      token ? helper.store.set(keys.token, token, {
        expireDays: 0,
        type: 'cookie'
      }) : helper.store.remove(keys.token, 'cookie')
    }
    commit('SET_STORE', { token: token || '' })
  }
}
