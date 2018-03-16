<template>
  <div class="props-panel" v-show="propsPanel.status">
    <div class="props-title">
      设置面板
      <i class="f-fr el-icon-close props-close" @click="$store.commit('CLOSE_PROPS_PANEL')"></i>
    </div>
    <div class="props-body">
      <keep-alive>
        <component 
          :is="propsPanel.name"
          :id="propsPanel.id">
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import CompConfigs from '@/components/config.js'
import PagePropConfig from '@/dialog/PagePropConfig.vue'
export default {
  name: 'ThePropManage',
  computed: {
    propsPanel () {
      return this.$store.getters.propsPanel
    },
    curComp () {
      return this.$store.getters.curComp
    }
  },
  components: {
    ...CompConfigs,
    PagePropConfig
  }
}
</script>
