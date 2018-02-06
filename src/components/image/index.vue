<template>
  <div class="c-image" :style="cm.css | parseCss">
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
  },
  filters: {
    parseCss: function (css) {
      const cssLists = {
        bgc: 'background-color'
      }
      let newCss = {}
      for (let key in css) {
        if (cssLists[key]) {
          newCss[cssLists[key]] = css[key]
        }
      }
      return newCss
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
