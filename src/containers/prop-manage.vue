<template>
  <ly-panel class="prop-manage" v-show="propsPanel.status">
    <div slot="header">
      设置面板
      <i class="f-fr el-icon-close u-btn-close" @click="$store.commit('CLOSE_PROPS_PANEL')"></i>
    </div>
    <div class="mn">
      <keep-alive>
        <component 
          :is="propsPanel.name"
          :id="propsPanel.id">
        </component>
      </keep-alive>
    </div>
  </ly-panel>
</template>

<script>
import CompConfigs from '@/components/blocks/config.js'
import PagePropConfig from '@/containers/page-prop-config.vue'

export default {
  name: 'PropManage',
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
    lyPanel: () => import('@/layouts/ly-panel'),
    PagePropConfig
  }
}
</script>
<style lang="scss">
  .prop-manage {
    position: absolute;
    top: 15vh;
    left: 10px;
    width: 300px;
    max-height: 80vh;
    overflow-y: auto;
    .u-btn-close {
      color: #ddd;
      cursor: pointer;
      &:hover {
        color: #ccc;
      }
    }
  }
</style>
