import CompDatas from '@/components/blocks/data.js'

export const getRandomId = (radix = 10) => Date.now().toString(radix)

export const getNewPageId = () => getRandomId(32)

export const getNewComp = (name) => {
  const compData = CompDatas[name] && CompDatas[name]()
  if (compData) {
    return {
      ...compData,
      id: getRandomId()
    }
  }
  return null
}

export const getNewPage = () => {
  return {
    id: getNewPageId(),
    css: {
      bgc: '',
      bgi: ''
    },
    props: {},
    comps: []
  }
}
