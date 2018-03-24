const win = window
const doc = win.document
const docEl = doc.documentElement
// const isAndroid = win.navigator.appVersion.match(/android/gi)
const isIPhone = win.navigator.appVersion.match(/iphone/gi)
const devicePixelRatio = win.devicePixelRatio
let dpr = 0

if (isIPhone) {
  // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
  if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
    dpr = 3
  } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
    dpr = 2
  } else {
    dpr = 1
  }
} else {
  // 其他设备下，仍旧使用1倍的方案
  dpr = 1
}
const scale = 1 / dpr

const setViewport = () => {
  docEl.setAttribute('data-dpr', dpr)

  const metaEl = doc.createElement('meta')
  metaEl.setAttribute('name', 'viewport')
  metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(metaEl)
  } else {
    const wrap = doc.createElement('div')
    wrap.appendChild(metaEl)
    doc.write(wrap.innerHTML)
  }
}
const refreshRem = () => {
  let width = docEl.getBoundingClientRect().width
  if (width / dpr > 540) {  // 大于540就默认不属于移动端的宽度范围
    width = 540 * dpr
  }
  const rem = width / 10
  docEl.style.fontSize = rem + 'px'
}

export default () => {
  setViewport()
  refreshRem()

  let tid
  win.addEventListener('resize', function () {
    clearTimeout(tid)
    tid = setTimeout(refreshRem, 300)
  }, false)
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px'
  } else {
    doc.addEventListener('DOMContentLoaded', function (e) {
      doc.body.style.fontSize = 12 * dpr + 'px'
    }, false)
  }
}
