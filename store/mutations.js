import { getType } from '@axmine/helper'
function setStore (state, data) {
  let val = data
  if (data.value) { val = { [data.key]: data.value } }
  Object.keys(val).forEach((k) => {
    if (getType(val[k]) === 'object') {
      Object.assign(state[k], val[k])
    } else {
      state[k] = val[k]
    }
  })
}

export default {
  /**
   * @params data: { key: 'keyName', value: {} }
   * 或
   * @params data: { keyName: value }
   * 或
   * @params data: [
   *  { key: 'keyName', value: {} },
   *  { keyName: value }
   * ]
   */
  SET_STORE: (state, data) => {
    const type = getType(data)
    if (!['array', 'object'].includes(type)) {
      throw new Error('提交的值的格式不正确')
    }
    switch (type) {
      case 'array':
        data.forEach((val) => {
          setStore(state, val)
        })
        break
      case 'object':
        setStore(state, data)
        break
    }
  }
}
