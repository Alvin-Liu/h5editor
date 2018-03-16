<template>
  <el-dialog
    title="图片选取"
    :visible="pickImg.status"
    width="50%"
    :before-close="handleCancel">
    <el-tabs 
      tab-position="left" 
      v-model="activeName" 
      style="min-height: 200px;" 
      @tab-click="handleClick">
      <el-tab-pane label="系统图片" name="public">
        <img-lists :lists="publicImgLists" @pick="pick" :active="curPickImg" />
      </el-tab-pane>
      <el-tab-pane label="我的图片" name="user">
        <img-lists :lists="userImgLists" @pick="pick" :active="curPickImg" />
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
import { getPublicMaterials, getUserMaterials } from '@/api/materials'
export default {
  name: 'PickImage',
  data () {
    return {
      activeName: 'public',
      curPickImg: {
        id: '',
        name: '',
        desc: '',
        url: ''
      },
      userImgLists: [],
      publicImgLists: []
    }
  },
  computed: {
    pickImg () {
      return this.$store.getters.pickImg
    }
  },
  methods: {
    handleClick () {
      const activeName = this.activeName
      if (activeName === 'user' && this.hasFetchData === false) {
        getUserMaterials().then((res) => {
          this.hasFetchData = true
          this.userImgLists = res.lists
        }).catch(() => {
          // this.userImgStatus = false
          this.$notify.error({
            title: '错误',
            message: '图片列表获取失败'
          })
        })
      }
    },
    pick (img) {
      Object.assign(this.curPickImg, img)
    },
    handleCancel () {
      this.curPickImg.id = ''
      this.$store.commit('SET_PICK_IMG', false)
    },
    handleConfirm () {
      this.pickImg && this.pickImg.callback && this.pickImg.callback(this.curPickImg)
      this.handleCancel()
    }
  },
  mounted () {
    this.hasFetchData = false
    getPublicMaterials().then((res) => {
      this.publicImgLists = res.lists
    }).catch(() => {
      // this.publicImgStatus = false
      this.$notify.error({
        title: '错误',
        message: '图片列表获取失败'
      })
    })
  },
  components: {
    imgLists: lists
  }
}
</script>
