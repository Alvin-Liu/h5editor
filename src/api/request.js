// 模拟异步请求
export default (opts) => {
  const time = Math.ceil(Math.random() * 200)
  return new Promise((resolve, reject) => {
    setTimeout(resolve(opts), time)
  })
}
