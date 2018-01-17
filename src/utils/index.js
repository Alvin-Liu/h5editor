const class2type = {}
const toString = class2type.toString
const hasOwn = class2type.hasOwnProperty

const type = (obj) => {
  if (obj === null) {
    return obj + ''
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj
}

const isFunction = (obj) => type(obj) === 'function'

export const deepClone = (obj) => {
  if (typeof obj !== 'object') {
    return
  }
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

export const isPlainObject = (obj) => {
  let proto, Ctor
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }
  proto = Object.getPrototypeOf(obj)
  if (!proto) {
    return true
  }
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
}

export const extend = (...rest) => {
  let deep = false
  let name, options, src, copy, clone, copyIsArray
  let length = rest.length
  let i = 1
  let target = rest[0] || {}
  if (typeof target === 'boolean') {
    deep = target
    target = rest[i] || {}
    i++
  }
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {}
  }
  for (; i < length; i++) {
    options = rest[i]
    if (options != null) {
      for (name in options) {
        src = target[name]
        copy = options[name]
        if (target === copy) {
          continue
        }
        if (deep && copy && (isPlainObject(copy) ||
            (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }
          target[name] = extend(deep, clone, copy)
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}

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
