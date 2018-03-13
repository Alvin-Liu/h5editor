
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      activeCollapse: '1',
      activeName: 'css'
    }
  },
  computed: {
    cm () {
      return this.$store.getters.getCompConfigByCompid(this.id)
    },
    css () {
      return this.cm.css
    }
  },
  methods: {
    updateCssBg (value) {
      this.updateCss({key: 'bgc', value: value})
    },
    updateCss ({ key, value }) {
      this.update({
        type: 'css',
        value: {
          [key]: value
        }
      })
    },
    updateAni ({ key, value }) {
      this.update({
        type: 'anim',
        value: value
      })
    },
    update ({ type, value }) {
      this.$store.commit('EDIT_COMP', {
        type: type,
        compid: this.id,
        value: value
      })
    }
  }
}
