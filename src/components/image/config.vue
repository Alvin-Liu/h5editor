<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="内容" name="content"></el-tab-pane>
    <el-tab-pane label="风格" name="style"></el-tab-pane>
    <el-tab-pane label="动画" name="animate"></el-tab-pane>
    <el-tab-pane label="样式" name="css">
      <el-collapse accordion>
        <el-collapse-item title="基础属性" name="1">
          宽度：<el-input :value="css.w" placeholder="宽度"></el-input>
          高度：<el-input :value="css.h" placeholder="高度"></el-input>
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
  }
}
</script>
