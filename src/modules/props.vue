<template>
  <div class="props-panel" v-show="propsPanel.status">
    <div class="props-title">
      设置面板
      <i class="f-fr el-icon-close props-close" @click="$store.commit('CLOSE_PROPS_PAANEL')"></i>
    </div>
    <div class="props-body">
      <keep-alive>
        <component 
          :is="propsPanel.name"
          :compid="propsPanel.id">
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import compConfigs from '@/components/config.js'
export default {
  name: 'props',
  computed: {
    propsPanel () {
      return this.$store.getters.propsPanel
    },
    curComp () {
      return this.$store.getters.curComp
    }
  },
  components: compConfigs
}
</script>
<style lang="scss">
  .props-panel {
    position: absolute;
    top: 70px;
    left: 10px;
    width: 300px;
    .props-close {
      color: #ddd;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    .props-title {
      padding: 10px;
      font-size: 14px;
      background-color: #000;
      color: #fff;
    }
    .props-body {
      min-height: 70vh;
      padding: 10px;
      background-color: #fff;
    }
  }
</style>