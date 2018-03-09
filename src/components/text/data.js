export default () => {
  return {
    id: 1,
    title: '文字',
    name: 'cText',
    type: 1,
    anim: {
      type: 1,
      duration: 1,
      delay: 0.4
    },
    props: {
      text: '这是文字'
    },
    css: {
      t: 100,
      l: 100,
      w: 100,
      h: 30,
      bd: {
        w: 1,
        t: 1,
        c: '#fff'
      },
      br: 5,
      ft: {
        s: 1,
        t: 1,
        h: '',
        c: '#333'
      },
      lh: 30,
      rotate: 0,
      bgc: '#fff'
    }
  }
}
