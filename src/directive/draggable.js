export default {
  bind: (el, binding) => {
    el.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      let disX = e.clientX - el.offsetLeft
      let disY = e.clientY - el.offsetTop

      document.onmousemove = (e) => {
        let l = e.clientX - disX
        let t = e.clientY - disY
        el.style.left = l + 'px'
        el.style.top = t + 'px'
        binding.value({ x: e.pageX, y: e.pageY })
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
