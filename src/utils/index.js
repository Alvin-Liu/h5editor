// 简单深拷贝，不考虑function、Date
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
