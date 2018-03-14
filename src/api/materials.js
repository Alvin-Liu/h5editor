import fetch from './fetch.js'
import Mock from 'mockjs'

const Random = Mock.Random

const IMG_LISTS = [
  'static/images/bg/1.jpg',
  'static/images/bg/2.jpg',
  'static/images/bg/3.jpg',
  'static/images/bg/4.jpg',
  'static/images/bg/5.jpg',
  'static/images/bg/6.jpg',
  'static/images/bg/7.jpg',
  'static/images/bg/8.jpg',
  'static/images/bg/9.jpg',
  'static/images/bg/10.jpg'
]

Random.extend({
  material: function (date) {
    const materials = IMG_LISTS
    return this.pick(materials)
  }
})

export const getPublicMaterials = () => {
  return fetch(Mock.mock({
    'lists|4-10': [{
      'id': '@id',
      'url': function () {
        return Random.material()
      },
      'name': '@ctitle(2,4)'
    }]
  }))
}

export const getUserMaterials = () => {
  return fetch(Mock.mock({
    'lists|4-10': [{
      'id': '@id',
      'url': function () {
        return Random.material()
      },
      'name': '@ctitle(2,4)'
    }]
  }))
}
