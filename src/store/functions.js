import { getRandomId } from '@/utils'
import dComps from '@/components/data.js'

export const getNewPageId = () => getRandomId(32)

export const getNewComp = (name) => {
  const compData = dComps[name] && dComps[name]()
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
