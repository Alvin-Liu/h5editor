import request from './request.js'

const getRandomId = (radix = 10) => Date.now().toString(radix)

export const getNewComp = () => {
  return request({
    id: getRandomId()
  })
}

export const getNewPage = () => {
  return request({
    id: getRandomId(32),
    css: {},
    props: {},
    comps: []
  })
}
