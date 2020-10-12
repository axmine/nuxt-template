module.exports = {
  axios: {
    api: 'http://www.api.com', // 接口地址
    baseURL: '/api', // 前缀，自定义，只要不跟路由冲突即可
    times: 1, // 失败时重复请求的次数
    updateToken: [4002, 4020], // 更新token
    errLogApi: '/error/log', // 提交错误日志的接口
    error: [401, 4001, 4010], // token失效
    success: [0, 200, 2000] // 成功码
  },
  cnzz: '', // 网页分析
  keys: {
    token: '_t_', // token 保存在本地的键名
    user: '_u_' // user 保存在本地的键名
  },

  // 站点基本设置 & 简单的SEO设置
  site: {
    title: 'nuxt模板',
    favicon: '',
    keywords: 'nuxt快速开发模板',
    description: '这是一个nuxt快速开发模板示例站点',
    // 公共 Css 文件
    globalCSS: [
      // 'https://www.test.com/common.css'
    ],

    // 公共js文件
    globalJS: [
      // '//www.test.com/common.js'
    ]
  }
}
