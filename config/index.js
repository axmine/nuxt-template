module.exports = {
  axios: {
    api: 'http://shzj.sihongedu.com',
    baseURL: '/api',
    times: 1, // 失败时重复请求的次数
    updateToken: [4002, 4020], // 更新token
    errLogApi: '/error/log', // 提交错误日志的接口
    error: [401, 4001, 4010], // token失效
    success: [0, 200, 2000] // 成功码
  },
  cnzz: '', // 网页分析
  keys: {
    token: '_t_',
    user: '_u_'
  }
}
