// 模拟异步请求
export default (data, err) => {
  const time = Math.ceil(Math.random() * 200)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (Math.random() > 0.01 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? resolve(data)
        : reject(err)
    }, time)
  })
}
