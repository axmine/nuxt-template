import Vue from 'vue'
import Axios from 'axios'
import Qs from 'qs'
import helper from '@axmine/helper'
import { Modal, message } from 'ant-design-vue'
import { version } from '@/package.json'
import config from '@/config/index.js'
import { getHeaderCookie } from '@/assets/js/common.js'
const axiosConfig = config.axios
const keys = config.keys

// Vue.use(Drawer)
// 使用 Vue.use(Modal) 可消除 ant-design-vue 的小 bug
Vue.use(Modal)

export default function ({ app, store, req }, inject) {
  // 创建axios 实例
  const baseURL = process.client ? axiosConfig.baseURL : axiosConfig.api
  const axios = Axios.create({
    baseURL,
    transformRequest: [
      (data) => {
        return Qs.stringify(data)
      }
    ],
    timeout: 5000
  })

  // 处理请求参数
  axios.interceptors.request.use(
    (config) => {
      // 请求携带的数据
      const data = { post: config.data, get: config.params }[config.method]
      // 请求头插入 token
      const tk = keys.token
      const serverCookie = process.server ? req.headers.cookie : ''
      const serverTk = getHeaderCookie(serverCookie)[tk] || ''
      const clientTk = process.client ? helper.store.get(tk, 'cookie') : ''
      const token = store.token || serverTk || clientTk
      token && Object.assign(config.headers, { 'X-Token': token })
      // 合并请求参数
      Object.assign(data, { version }, data)
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )

  // 响应拦截
  axios.interceptors.response.use(
    (response) => {
      let { data } = response
      try {
        JSON.stringify(data)
      } catch (err) {
        data = { code: 500, result: {}, message: '请求错误，未获取预期数据' }
      }
      return data
    },
    (error) => {
      const info = {
        400: '参数错误（400）',
        403: '没有权限（403）',
        404: '请求不存在（404）',
        405: '请求被拒绝（405）',
        500: '请求发生错误（500）',
        501: '请求发生错误（501）',
        502: '请求发生错误（502）',
        503: '请求发生错误（503）',
        504: '网络似乎出错了',
        505: '请求发生错误（505）'
      }
      const data = { code: 504, result: {}, message: '' }
      const res = error.response || ''
      let message = info[data.code] || `请求异常，请联系管理员（${data.code}）`
      if (res) {
        const result = res.data
        Object.assign(data, { code: res.status, result })
        message = info[res.status] || `请求异常，请联系管理员（${res.status}）`
      } else {
        Object.assign(data, { result: error.message || {} })
      }
      data.message = message
      return Promise.reject(data)
    }
  )

  async function request (api, json, config = {}, times = axiosConfig.times) {
    const conf = Object.assign({ method: 'post', option: {} }, config)
    const url = api.indexOf('/') === 0 ? api.slice(1) : api
    try {
      const method = conf.method || 'post'
      // 执行 ajax 请求
      const result = await axios({
        url,
        method,
        ...conf.option,
        ...({ post: { data: json }, get: { params: json } }[method])
      })
      // return result
      return result
    } catch (err) {
      times--
      // 开始重试
      if (times > 0 && err.code !== 404) {
        // 如果不是因为token无效的问题，则开始重试
        const result = await request(api, json, config, times)
        return result
      } else {
        // 如果是token过期，则不报错
        const isExpired = axiosConfig.updateToken.includes(err.code)
        const args = [api, json, config, err]
        return isExpired ? handleExpired(...args) : handleError(...args)
      }
    }
  }
  function handleExpired (api, json, config, error) {
    // 处理过期token
    console.log(api, json, config, error)
    return false
  }
  function handleError (api, json, config, error) {
    // 1. 向服务器提交错误日志
    if (api !== axiosConfig.errLogApi) {
      // 将错误保存到服务器
      request(axiosConfig.errLogApi, {
        data: JSON.stringify({
          apiUrl: api,
          params: json,
          version,
          error,
          config,
          client: process.server ? 'server' : 'client'
        })
      })
    }
    // 2. 如果是token无效，在浏览器端弹出提示框，让用户重新登录
    const isError = axiosConfig.error.includes(error.code)
    if (process.client && isError) {
      // 弹出提示框
      const modal = Modal.confirm({
        title: error.message || '登录已失效，请重新登录！',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          modal.destroy()
          // 打开登录框
          store.dispatch('SetStore', { accounnt: true })
        }
      })
    }
    return isError ? false : error
  }

  // 解析 result
  async function getResult (api, jsonData, config = {}) {
    const data = await request(api, jsonData, config)
    const bool = axiosConfig.success.includes(data.code * 1)
    const result = bool ? data.result || {} : false
    // 如果结果错误并且要求显性提示
    if (!result && config.tips) {
      // 处理错误
      process.client && message.error(data.message || '请求错误，未获取预期数据')
    }
    return result
  }

  // 注入实例
  inject('http', {
    post: async (url, data, config = {}) => {
      const conf = Object.assign(config, { method: 'post', tips: true })
      const result = await getResult(url, data, conf)
      return result
    },
    get: async (url, data, config = {}) => {
      const conf = Object.assign(config, { method: 'get', tips: true })
      const result = await getResult(url, data, conf)
      return result
    },
    request: async (url, data, config = {}) => {
      const conf = Object.assign({ method: 'post' }, config)
      const result = await getResult(url, data, conf)
      return result
    }
  })
}
