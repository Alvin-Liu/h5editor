<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="动画" name="anim" v-if="content.anim">
      <ui-animate :value="content.anim" @change="updateAnimate" />
    </el-tab-pane>
    <el-tab-pane label="样式" name="css" v-if="content.css">
      <el-collapse accordion>
        <!-- <el-collapse-item title="尺寸与位置" class="h-from" v-if="content.css.base">
          <ui-base :value="content.css.base" @change="updateStyle" />
        </el-collapse-item> -->
        <el-collapse-item title="边框" class="h-from" v-if="content.css.bd">
          <ui-border :value="content.css.bd" @change="updateStyle" />
        </el-collapse-item>
        <el-collapse-item title="字体" class="h-from" v-if="content.css.ft">
          <ui-font :value="content.css.ft" @change="updateStyle" />
        </el-collapse-item>
        <el-collapse-item title="背景色" class="h-from" v-if="content.css.bg">
          <ui-background :value="content.css.bg" @change="updateStyle" />
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
    <el-tab-pane label="内容" name="props">
      <keep-alive>
        <component
          v-if="hasComponentConfig && content.props"
          :is="renderComponentConfigName"
          :content="renderComponentConfigProps"
          @update="updateContentProps"
        />
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import UiComponents from './ui/index.js'
import ComponentConfig from '@/components/blocks/config.js'
import { deepClone } from '@/utils/index.js'

export default {
  name: 'formRenderer',
  components: {
    ...UiComponents,
    ...ComponentConfig
  },
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
  computed: {
    renderComponentConfigName () {
      return this.content.name && (this.content.name.toLowerCase() + 'Config')
    },
    renderComponentConfigProps () {
      return deepClone(this.content.props)
    },
    hasComponentConfig () {
      return ComponentConfig[this.renderComponentConfigName]
    }
  },
  methods: {
    updateStyleBg (value) {
      this.updateStyle({key: 'bgc', value: value})
    },
    updateStyle ({ key, value }) {
      this.update({
        type: 'css',
        value: {
          [key]: value
        }
      })
    },
    updateAnimate ({ key, value }) {
      this.update({
        type: 'anim',
        value: value
      })
    },
    updateContentProps (key, value) {
      this.update({
        type: 'props',
        value: {
          [key]: value
        }
      })
    },
    update ({ type, value }) {
      this.$store.commit('EDIT_COMP', {
        type: type,
        compid: this.content.id,
        value: value
      })
    }
  }
}
</script>
