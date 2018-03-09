import {
  FONT_FAMILYS,
  FONT_SIZES,
  BORDER_STYLES,
  PATTERN_MATCH
} from '@/config/style-match.js'

const getCssObj = (key, value) => {
  const handler = {
    bd: () => {
      return {
        'border-width': value.w + 'px',
        'border-style': BORDER_STYLES[value.t],
        'border-color': value.c
      }
    },
    ft: () => {
      return {
        'font-size': FONT_SIZES[value.s],
        'font-family': FONT_FAMILYS[value.t],
        'color': value.c
      }
    }
  }
  const handlerValue = handler[key] && handler[key]()
  return handlerValue || {}
}

export default (css, ...filterProps) => {
  if (!css || typeof css !== 'object') {
    return ''
  }
  let newCss = {}
  for (let key in css) {
    const propName = PATTERN_MATCH[key]
    const propValue = css[key]
    // 跳过指定属性
    if (filterProps.includes(key)) {
      continue
    }
    // 属性值为null、undefined，跳过
    if (propValue === null || propValue === undefined) {
      continue
    }
    // PATTERN_MATCH中有对应的
    if (propName) {
      if (typeof propName === 'object') {
        newCss[propName.value] = propValue + propName.unit
      } else {
        newCss[propName] = propValue
      }
    } else {
      Object.assign(newCss, getCssObj(key, propValue))
    }
  }
  return newCss
}
