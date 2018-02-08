<template>
  <div class="container">
    <div class="comp-lists"
      v-for="page in pages"
      :key="page.id"
      v-show="page.id === curPageId">
      <vue-drr
        v-for="comp in page.comps"
        :w="comp.css.w"
        :h="comp.css.h"
        :y="comp.css.t"
        :x="comp.css.l"
        :angle="comp.css.rotate"
        @activated="toggleCompid(comp.id)"
        @deactivated="toggleCompid(null)"
        @dragging="handleDragging"
        @resizing="handleResizing"
        @rotating="handleRotating"
        :key="comp.id">
        <vlist 
          @click="handleClick(comp)"
          @dblclick="handleDblclick"
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
    }
  },
  methods: {
    handleClick (comp) {
      this.$store.commit('OPEN_PROPS_PANEL', {
        name: comp.name,
        id: comp.id
      })
    },
    handleDblclick (name) {
      if (name === 'cImage') {
        this.$store.commit('SET_PICK_IMG', true)
      }
    },
    toggleCompid (id) {
      this.$store.commit('TOGGLE_COMP', id)
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
        },
        compid: {
          type: [String, Number],
          required: true
        }
      },
      render (h) {
        const module = vcomps[this.name]
        return h(module, {
          props: {
            compid: this.compid
          },
          nativeOn: {
            click: this.clickHandler,
            dblclick: this.dblclickHandler
          }
        })
      },
      methods: {
        clickHandler () {
          this.$emit('click', this.name)
        },
        dblclickHandler () {
          this.$emit('dblclick', this.name)
        }
      }
    }
  }
}
</script>
