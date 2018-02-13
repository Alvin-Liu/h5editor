<template>
  <el-dialog
    title="图片选取"
    :visible="pickImg.status"
    width="50%"
    :before-close="handleClose">
    <el-tabs tab-position="left" style="min-height: 200px;">
      <el-tab-pane label="系统图片">
        <img-lists :lists="imgLists" @pick="pick" />
      </el-tab-pane>
      <el-tab-pane label="我的图片">
        <img-lists :lists="imgLists" @pick="pick" />
      </el-tab-pane>
    </el-tabs>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import lists from './lists.vue'
export default {
  name: 'pickImg',
  data () {
    return {
      curPickImg: {
        name: '',
        desc: '',
        url: ''
      },
      imgLists: [
        {
          id: 1,
          name: 'logo',
          url: 'static/images/logo.png',
          desc: 'logo'
        },
        {
          id: 2,
          name: 'h5editor',
          url: 'static/images/h5editor.png',
          desc: 'h5editor'
        }
      ]
    }
  },
  computed: {
    pickImg () {
      return this.$store.getters.pickImg
    }
  },
  methods: {
    pick (img) {
      Object.assign(this.curPickImg, img)
    },
    handleClose () {
      this.$store.commit('SET_PICK_IMG', false)
    },
    handleCancel () {
      this.$store.commit('SET_PICK_IMG', false)
    },
    handleConfirm () {
      console.log(this.curPickImg)
      this.pickImg && this.pickImg.callback && this.pickImg.callback(this.curPickImg)
      this.handleCancel()
    }
  },
  components: {
    imgLists: lists
  }
}
</script>
