<template>
  <div class="c-text" :style="cm.css | formatStyle">
    <a :style="linkStyle | formatStyle" href="#" v-html="cm.props.text"></a>
  </div>
</template>

<script>
export default {
  name: 'cText',
  props: {
    compid: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    cm () {
      return this.$store.getters.getCompConfigByCompid(this.compid)
    },
    linkStyle () {
      const css = this.cm.css
      return {
        ft: css.ft
      }
    }
  }
}
</script>
