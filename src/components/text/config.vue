<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="动画" name="animate"></el-tab-pane>
    <el-tab-pane label="样式" name="css">
      <el-collapse accordion>
        <el-collapse-item title="基础属性" name="1" class="h-from">
          <div class="item">
            颜色：<el-color-picker :value="css.c" @change="updateCssFontColor" />
          </div>
          <div class="item">
            背景色：<el-color-picker :value="css.bgc" @change="updateCssBg" />
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'imageConfig',
  props: {
    compid: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      activeName: 'css'
    }
  },
  computed: {
    cm () {
      return this.$store.getters.getCompConfigByCompid(this.compid)
    },
    css () {
      return this.cm.css
    }
  },
  methods: {
    updateCssFontColor (value) {
      this.updateCss('ft', {
        c: value
      })
    },
    updateCssBg (value) {
      this.updateCss('bgc', value)
    },
    updateCss (prop, value) {
      this.$store.commit('EDIT_COMP', {
        type: 'css',
        compid: this.compid,
        value: {
          [prop]: value
        }
      })
    }
  }
}
</script>
