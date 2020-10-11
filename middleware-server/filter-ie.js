const useragent = require('express-useragent')
const { ie } = require('../assets/js/ie.js')
export default function (req, res, next) {
  const method = req.method || ''
  if (method.toLowerCase() !== 'get') {
    next()
    return false
  }
  const source = req.headers['user-agent']
  const ua = useragent.parse(source)
  // 浏览器版本小于 ie11 时，提示不提供支持
  if (ua.isIE && parseInt(ua.version) < 11) {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
    res.end(ie)
  } else {
    next()
  }
}
