<template>
  <div
    :compid="comp.id"
    class="comp"
    :style="compStyle | calcStyle"
    :is="BASE_COMP_NAME + comp.name">
  </div>
</template>

<script>
import BaseComps from '@/components/index.js'

const BASE_COMP_NAME = 'Base'

export default {
  name: 'ComponentRenderer',
  props: {
    comp: {
      type: Object,
      required: true
    },
    type: String
  },
  data () {
    return {
      isEdit: this.type === 'edit'
    }
  },
  computed: {
    compStyle () {
      const css = this.comp.css
      if (this.isEdit) {
        return {
          ...css,
          rotate: null
        }
      }
      return css
    }
  },
  created () {
    this.BASE_COMP_NAME = BASE_COMP_NAME
  },
  components: BaseComps
}
</script>
