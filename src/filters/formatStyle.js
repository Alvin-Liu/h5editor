const styleLists = {
  w: {
    value: 'width',
    unit: 'px'
  },
  h: {
    value: 'height',
    unit: 'px'
  },
  t: {
    value: 'top',
    unit: 'px'
  },
  l: {
    value: 'left',
    unit: 'px'
  },
  bgc: 'background-color'
}

const bdType = {
  0: 'none',
  1: 'solid',
  2: 'dashed',
  3: 'dotted',
  4: 'double'
}
const getCssObj = (key, value) => {
  const handler = {
    bd: () => {
      return {
        'border-width': value.w + 'px',
        'border-style': bdType[value.t],
        'border-color': value.c
      }
    }
  }
  const handlerValue = handler[key] && handler[key]()
  return handlerValue || {}
}

export default (css) => {
  if (!css || typeof css !== 'object') {
    return ''
  }
  let newCss = {}
  for (let key in css) {
    const propName = styleLists[key]
    const propValue = css[key]
    // 属性值为null、undefined，跳过
    if (propValue === null || propValue === undefined) {
      continue
    }
    // styleLists中有对应的
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
