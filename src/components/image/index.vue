<template>
  <div class="c-image" :style="cm.css | formatStyle">
    <a href="#">
      <img :src="imgUrl" alt="img">
    </a>
  </div>
</template>

<script>
export default {
  name: 'cImage',
  props: {
    compid: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      imgUrl: 'static/images/logo.png'
    }
  },
  computed: {
    cm () {
      return this.$store.getters.getCompConfigByCompid(this.compid)
    }
  }
}
</script>
