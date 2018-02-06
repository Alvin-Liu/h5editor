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
