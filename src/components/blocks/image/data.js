export default () => {
  return {
    id: 1,
    title: '图片',
    name: 'Image',
    type: 1,
    anim: {
      type: 1,
      duration: 1,
      delay: 0.4
    },
    props: {
      src: './static/images/logo.png'
    },
    css: {
      base: {
        t: 100,
        l: 100,
        w: 100,
        h: 100,
        br: 5,
        rotate: 0
      },
      bd: {
        w: 1,
        t: 1,
        c: '#fff'
      },
      bgc: '#fff'
    }
  }
}
