export default {
  data () {
    return {
      activeCollapse: '1',
      activeName: 'css'
    }
  },
  computed: {
    cm () {
      return this.$store.getters.getCompConfigByCompid(this.compid)
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
      this.$store.commit('EDIT_COMP', {
        type: 'css',
        compid: this.compid,
        value: {
          [key]: value
        }
      })
    }
  }
}
