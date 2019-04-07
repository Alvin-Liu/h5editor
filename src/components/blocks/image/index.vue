<template>
  <div class="c-image">
    <a href="#">
      <img :src="cm.props && cm.props.src">
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
      return this.$store.getters.getCompConfigByCompid(this.compid) || {}
    }
  }
}
</script>
<style lang="scss">
  .c-image {
    a {
      display: block;
      img {
        width: 100%;
      }
    }
  }
</style>
