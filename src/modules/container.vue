<template>
  <div class="container">
    <vlist 
      v-for="(comp, index) in complists"
      :key="index"
      :name="comp.name">
    </vlist>
  </div>
</template>

<script>
import vcomps from '@/components'
export default {
  name: 'modules',
  props: {
    complists: {
      type: Array,
      required: true
    }
  },
  components: {
    vlist: {
      props: {
        name: {
          type: String,
          required: true
        }
      },
      render (createElement) {
        const module = vcomps[this.name]
        return createElement(
          module,
          this.$slots.default // 子组件中的阵列
        )
      }
    }
  }
}
</script>
