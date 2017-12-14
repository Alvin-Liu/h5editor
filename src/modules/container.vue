<template>
  <div class="container">
    <vlist 
      v-for="(comp, index) in complists"
      :key="index"
      class="comp"
      v-draggable="greet"
      :name="comp.name">
    </vlist>
  </div>
</template>

<script>
import draggable from '@/directive/draggable'
import vcomps from '@/components'
export default {
  name: 'modules',
  props: {
    complists: {
      type: Array,
      required: true
    }
  },
  directives: {
    draggable
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
  },
  methods: {
    greet (val) {
      console.log(val)
    }
  }
}
</script>
