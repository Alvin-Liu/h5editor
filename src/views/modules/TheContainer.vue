<template>
  <div class="container">
    <div class="comp-lists"
      v-for="page in pages"
      :key="page.id"
      v-show="page.id === curPageId"
      :style="page.css | calcStyle">
      <div class="wrap-bg" 
        :style="{
          backgroundColor: page.css.bgc,
          backgroundImage: 'url(' + page.css.bgi + ')'
        }"></div>
      <vue-drr
        v-for="comp in page.comps"
        :w="comp.css.w || comp.css.base.w"
        :h="comp.css.h || comp.css.base.h"
        :y="comp.css.t || comp.css.base.t"
        :x="comp.css.l || comp.css.base.l"
        :minw="10"
        :minh="10"
        :angle="comp.css.rotate"
        @activated="toggleCompid(comp.id)"
        @dragging="handleDragging"
        @resizing="handleResizing"
        @rotating="handleRotating"
        @click.native="handleClick(comp)"
        @dblclick.native="handleDblclick(comp.name)"
        :key="comp.id">
        <component-renderer :comp="comp" type="edit"></component-renderer>
      </vue-drr>
    </div>
  </div>
</template>

<script>
import vueDrr from 'vue-drr'
import ComponentRenderer from '@/views/modules/ComponentRenderer'

const BASE_COMP_CONFIG_NAME = 'Config'

export default {
  name: 'TheContainer',
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
        name: comp.name + BASE_COMP_CONFIG_NAME,
        id: comp.id
      })
    },
    handleDblclick (name) {
      if (name === 'Image') {
        this.$store.commit('SET_PICK_IMG', {
          status: true,
          callback: (img) => {
            this.$store.commit('EDIT_COMP', {
              type: 'props',
              value: {
                src: img.url
              }
            })
          }
        })
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
    vueDrr,
    ComponentRenderer
  }
}
</script>
