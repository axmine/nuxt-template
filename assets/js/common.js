export function getHeaderCookie (cookie = '') {
  const cookies = cookie.split('; ')
  const result = {}
  cookies.forEach((item) => {
    const ck = item.split('=')
    result[ck[0]] = ck[1]
  })
  return result
}
