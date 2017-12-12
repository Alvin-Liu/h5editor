<template>
  <el-card id="modules" class="panel">
    <div slot="header" class="tt">
      <span>组件列表</span>
      <i class="el-icon-close"></i>
    </div>
    <div class="ctn">
      <div class="item" @click="addNewModule('image')">图片</div>
    </div>
  </el-card>
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
