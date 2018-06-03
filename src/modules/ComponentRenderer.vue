<template>
  <div
    :compid="comp.id"
    class="comp"
    :style="comp.css | calcStyle('rotate')"
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
    }
  },
  created () {
    this.BASE_COMP_NAME = BASE_COMP_NAME
  },
  components: BaseComps
}
</script>
