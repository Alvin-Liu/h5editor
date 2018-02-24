<template>
  <div class="c-text" :style="cm.css | formatStyle">
    <a href="#" v-html="cm.props.text"></a>
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
    }
  }
}
</script>
