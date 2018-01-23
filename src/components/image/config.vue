<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="内容" name="content"></el-tab-pane>
    <el-tab-pane label="风格" name="style"></el-tab-pane>
    <el-tab-pane label="动画" name="animate"></el-tab-pane>
    <el-tab-pane label="样式" name="css">
      <el-collapse v-model="collapseName" accordion>
        <el-collapse-item title="基础属性" name="1">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-collapse-item>
        <el-collapse-item title="其他" name="2">
          
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'imageConfig',
  data () {
    return {
      activeName: 'css',
      collapseName: '1',
      input: '12'
    }
  }
}
</script>
