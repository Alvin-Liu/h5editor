import fetch from './fetch.js'

const getRandomId = (radix = 10) => Date.now().toString(radix)

const getNewComp = (name) => {
  return fetch(() => {
    console.log(1)
  })
}
