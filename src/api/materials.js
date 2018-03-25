import fetch from './fetch.js'
import Mock from 'mockjs'

// const Random = Mock.Random

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

const PUBLIC_BGM_LISTS = [
  'http://res1.eqh5.com/store/fcbdfaa6d9348f4441eec0ff92552326.mp3',
  'http://res1.eqh5.com/store/19/f0729d7be3da923eb7f1a8874ac038eb.mp3',
  'http://res1.eqh5.com/store/34d7431f3f1584bae506a7d0b342bf32.mp3',
  'http://res1.eqh5.com/store/19/f0729d7be3da923eb7f1a8874ac038eb.mp3',
  'http://res1.eqh5.com/store/ab7fc0401c1d9e317f0aeda3600b5030.mp3',
  'http://res1.eqh5.com/store/e94c1cead55743dfc37af74a384dc9c3.mp3'
]

const USER_BGM_LISTS = [
  'http://res1.eqh5.com/store/00713eb8ed122c3d3b66972e92e91c0a.mp3',
  'http://res1.eqh5.com/store/95a36241028fc154e65f08da936d6ab8.mp3'
]

// Random.extend({
//   material: function () {
//     return this.pick(IMG_LISTS)
//   }
// })

export const getPublicMaterials = () => {
  return fetch(Mock.mock({
    'lists|4-10': [{
      'id': '@id',
      'sortid|+1': 0,
      'url': function () {
        // return Random.material()
        return IMG_LISTS[this.sortid]
      },
      'name': '@ctitle(2,4)'
    }]
  }))
}

export const getUserMaterials = () => {
  return fetch(Mock.mock({
    'lists|1-3': [{
      'id': '@id',
      'sortid|+1': 0,
      'url': function () {
        // return Random.material()
        return IMG_LISTS[this.sortid]
      },
      'name': '@ctitle(2,4)'
    }]
  }))
}

export const getPublicBGMs = () => {
  return fetch(Mock.mock({
    'lists|4-6': [{
      'id': '@id',
      'sortid|+1': 0,
      'src': function () {
        return PUBLIC_BGM_LISTS[this.sortid]
      },
      'name': '@ctitle(2,4)',
      'type': 'mp3',
      'origin': '易企秀'
    }]
  }))
}

export const getUserBGMs = () => {
  return fetch(Mock.mock({
    'lists|1-2': [{
      'id': '@id',
      'sortid|+1': 0,
      'src': function () {
        return USER_BGM_LISTS[this.sortid]
      },
      'name': '@ctitle(2,4)',
      'type': 'mp3',
      'origin': '易企秀'
    }]
  }))
}
