<template>
  <el-container class="tpl-lists">
    <el-header height="40px" class="panel-header bg-sub">组件列表</el-header>
    <el-main class="bg-gray f-cb">
      <div class="item" @click="addNewModule('image')">图片</div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'modules',
  methods: {
    addNewModule (name) {
      this.$store.commit('ADD_TO_PAGE', {
        name: name
      })
    }
  }
}
</script>
