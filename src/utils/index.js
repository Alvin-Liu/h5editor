import merge from 'merge'

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

// 对象数组 crud 等， 返回值不改变原数组
const DEFAULT_KEY = 'id'
export const objectArray = {  // 简单粗暴
  add (arr, elem) {
    return arr.concat(elem)
  },
  del (arr, value, key = DEFAULT_KEY) {
    return arr.filter(item => item[key] !== value)
  },
  replace (arr, elem, func) {
    const index = this.findIndex(arr, func)
    const newArr = arr.concat()  // 不用考虑深拷贝
    if (index > -1) {
      newArr.splice(index, 1, elem)
    }
    return newArr
  },
  update (arr, elem, func) {
    const index = this.findIndex(arr, func)
    if (index < 0) {
      return arr
    }

    const newElem = merge.recursive(true, arr[index], elem)
    const newArr = arr.concat()  // 不用考虑深拷贝
    newArr.splice(index, 1, newElem)
    return newArr
  },
  find (arr, func) {
    return arr.find(func)
  },
  findIndex (arr, func) {
    return arr.findIndex(func)
  },
  insertBefore (arr, elem, func) {
    const index = this.findIndex(arr, func)
    if (index > -1) {
      const newArr = arr.concat()  // 不用考虑深拷贝
      newArr.splice(index + 1, 0, elem)
      return newArr
    }
    // 如果未找到对应的 index ，则放置末尾
    return this.add(arr, elem)
  }
}
