export { default as flexible } from './lib-flexible.js'

// 简单json数据深拷贝
export const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

// 节流
export const throttle = (func, wait) => {
  let context, args
  let previous = 0
  return () => {
    let now = Date.now()
    context = this
    args = arguments
    if (now - previous > wait) {
      previous = now
      func.apply(context, args)
    }
  }
}

export const isMobile = /Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

export const local = {
  set (key, value) {
    localStorage.setItem(key, value)
  },
  get (key) {
    localStorage.getItem(key)
  },
  remove (key) {
    localStorage.removeItem(key)
  }
}
