export default (cb) => {
  const time = Math.ceil(Math.random() * 200)
  setTimeout(() => cb, time)
}
