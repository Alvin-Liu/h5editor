<template>
  <div class="container">
    <div class="comp-lists"
      v-for="page in pages"
      :key="page.id"
      v-show="page.id === curPageId">
      <vue-drr
        v-for="comp in complists"
        :w="comp.css.w"
        :h="comp.css.h"
        :y="comp.css.t"
        :x="comp.css.l"
        :angle="comp.css.rotate"
        @dbclick="openDialog(comp)"
        @activated="toggleCompid(comp.id)"
        @deactivated="toggleCompid(null)"
        @dragging="handleDragging"
        @resizing="handleResizing"
        @rotating="handleRotating"
        :key="comp.id">
        <vlist 
          :compid="comp.id"
          class="comp"
          :name="comp.name">
        </vlist>
      </vue-drr>
    </div>
  </div>
</template>

<script>
import vueDrr from 'vue-drr'
import vcomps from '@/components'
export default {
  name: 'modules',
  computed: {
    pages () {
      return this.$store.getters.pages
    },
    curPageId () {
      return this.$store.getters.curPageId
    },
    complists () {
      return this.$store.getters.getComplistsByPageId(this.curPageId)
    }
  },
  methods: {
    toggleCompid (id) {
      this.$store.commit('TOGGLE_COMP', id)
    },
    openDialog (comp) {
      console.log(comp)
    },
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
