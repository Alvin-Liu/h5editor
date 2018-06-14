<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="动画" name="anim" v-if="content.anim">
      <ui-animate :value="content.anim" @change="updateAni" />
    </el-tab-pane>
    <el-tab-pane label="样式" name="css" v-if="content.css">
      <el-collapse accordion>
        <el-collapse-item title="尺寸与位置" class="h-from" v-if="content.css.base">
          <ui-base :value="content.css.base" @change="updateCss" />
        </el-collapse-item>
        <el-collapse-item title="边框" class="h-from" v-if="content.css.bd">
          <ui-border :value="content.css.bd" @change="updateCss" />
        </el-collapse-item>
        <el-collapse-item title="字体" class="h-from" v-if="content.css.ft">
          <ui-font :value="content.css.ft" @change="updateCss" />
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import UiComponents from './ui/index.js'

export default {
  name: 'formRenderer',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeCollapse: '1',
      activeName: 'css'
    }
  },
  methods: {
    updateCssBg (value) {
      this.updateCss({key: 'bgc', value: value})
    },
    updateCss ({ key, value }) {
      this.update({
        type: 'css',
        value: {
          [key]: value
        }
      })
    },
    updateAni ({ key, value }) {
      this.update({
        type: 'anim',
        value: value
      })
    },
    update ({ type, value }) {
      this.$store.commit('EDIT_COMP', {
        type: type,
        compid: this.content.id,
        value: value
      })
    }
  },
  components: UiComponents
}
</script>
