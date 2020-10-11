// 在生产环境中使用cnzz统计分析
import config from '@/config/index.js'
const src = config.cnzz || ''
if (process.client && process.env.NODE_ENV === 'production') {
  const cnzz = document.createElement('script')
  cnzz.type = 'text/javascript'
  cnzz.async = true
  cnzz.charset = 'utf-8'
  cnzz.src = src
  const root = document.getElementsByTagName('script')[0]
  root.parentNode.insertBefore(cnzz, root)
}

export default ({ app: { router } }) => {
  src && router.afterEach((to, from) => {
    if (process.client && process.env.NODE_ENV === 'production') {
      const cncc = window._czc || []
      cncc.push(['_setAutoPageview', false])
      cncc.push(['_trackPageview', to.fullPath, from.fullPath || ''])
    }
  })
}
