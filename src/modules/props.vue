<template>
  <div class="props-panel" v-show="propsPanel.status">
    <div class="props-title">
      设置面板
      <i class="el-icon-error" @click="$store.commit('CLOSE_PROPS_PAANEL')"></i>
    </div>
    <div class="props-body">
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import compConfigs from '@/components/config.js'
export default {
  name: 'props',
  data () {
    return {
      currentView: 'cImage'
    }
  },
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
    top: 60px;
    left: 100px;
    width: 300px;
    .props-title {
      padding: 10px;
      font-size: 14px;
      background-color: #000;
      color: #fff;
    }
    .props-body {
      padding: 10px;
      background-color: #fff;
    }
  }
</style>