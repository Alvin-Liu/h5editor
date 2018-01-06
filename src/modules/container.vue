<template>
  <div class="container">
    <vue-drr
      v-for="(comp, index) in curpage.comps"
      :w="comp.css.w"
      :h="comp.css.h"
      :y="comp.css.t"
      :x="comp.css.l"
      :angle="comp.css.rotate"
      @activated="$store.commit('SET_CUR_COMP', comp)"
      @deactivated="$store.commit('SET_CUR_COMP', {})"
      @dragging="handleDragging"
      @resizing="handleResizing"
      @rotating="handleRotating"
      :key="index">
      <vlist 
        class="comp"
        :name="comp.name">
      </vlist>
    </vue-drr>
  </div>
</template>

<script>
import vueDrr from './vue-drr'
import vcomps from '@/components'
export default {
  name: 'modules',
  computed: {
    curpage () {
      return this.$store.getters.curPage
    }
  },
  methods: {
    updateStyle (val) {
      this.$store.commit('EDIT_COMP', {
        type: 'css',
        value: val
      })
    },
    handleResizing (x, y, w, h) {
      this.updateStyle({
        t: y,
        l: x,
        w: w,
        h: h
      })
    },
    handleDragging (x, y) {
      this.updateStyle({
        t: y,
        l: x
      })
    },
    handleRotating (angle) {
      this.updateStyle({
        rotate: angle
      })
    }
  },
  components: {
    vueDrr: vueDrr,
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
