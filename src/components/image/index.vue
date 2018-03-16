<template>
  <div class="c-image"
    :style="cm.css | calcStyle">
    <a href="#">
      <img :src="cm.props.src">
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseImage',
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
