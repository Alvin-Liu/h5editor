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
  lh: {
    value: 'line-height',
    unit: 'px'
  },
  c: 'color',
  bgc: 'background-color'
}

const bdType = {
  0: 'none',
  1: 'solid',
  2: 'dashed',
  3: 'dotted',
  4: 'double'
}

const fsType = {
  1: '12px',
  2: '14px',
  3: '16px',
  4: '18px',
  5: '20px',
  6: '22px',
  7: '24px',
  8: '26px',
  9: '28px',
  10: '30px',
  11: '32px',
  12: '34px',
  13: '36px',
  14: '48px',
  15: '64px'
}

const fmType = {
  1: '微软雅黑',
  2: '宋体',
  3: '楷体',
  4: '仿宋',
  5: '黑体',
  6: 'Arial'
}

const getCssObj = (key, value) => {
  const handler = {
    bd: () => {
      return {
        'border-width': value.w + 'px',
        'border-style': bdType[value.t],
        'border-color': value.c
      }
    },
    ft: () => {
      return {
        'font-size': fsType[value.s],
        'font-family': fmType[value.t],
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
    const propName = styleLists[key]
    const propValue = css[key]
    // 跳过指定属性
    if (filterProps.includes(key)) {
      continue
    }
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
