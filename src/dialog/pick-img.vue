<template>
  <el-dialog
    title="图片选取"
    :visible="pickImg.status"
    width="30%"
    :before-close="handleClose">
    <el-tabs tab-position="left" style="min-height: 200px;">
      <el-tab-pane label="系统图片">系统图片</el-tab-pane>
      <el-tab-pane label="我的图片">我的图片</el-tab-pane>
    </el-tabs>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'pickImg',
  computed: {
    pickImg () {
      return this.$store.getters.pickImg
    }
  },
  methods: {
    handleClose () {
      this.$store.commit('SET_PICK_IMG', false)
    },
    handleCancel () {
      this.$store.commit('SET_PICK_IMG', false)
    },
    handleConfirm () {
      console.log('确定')
    }
  }
}
</script>
