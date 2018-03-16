<template>
  <el-dialog
    title="音乐选取"
    :visible="pickBgm.status"
    width="50%"
    :before-close="handleCancel"
    custom-class="bgm-dialog">
    <el-tabs 
      tab-position="left" 
      v-model="activeName" 
      style="min-height: 200px;" 
      @tab-click="handleClick">
      <el-tab-pane label="系统音乐" name="public">
        <bgm-lists :lists="publicBGMs" @pick="pick" @play="handlePlay" :active="curPickBgm" />
      </el-tab-pane>
      <el-tab-pane label="我的音乐" name="user">
        <bgm-lists :lists="userBgmLists" @pick="pick" @play="handlePlay" :active="curPickBgm" />
      </el-tab-pane>
    </el-tabs>
    <p v-show="curPickBgm.src" class="bgm-active">已选择：{{ curPickBgm.name }}</p>
    <audio ref="music" preload="auto" loop></audio>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import lists from './lists.vue'
import { getPublicBGMs, getUserBGMs } from '@/api/materials'
export default {
  name: 'PickBgMusic',
  data () {
    return {
      isPlay: false,
      activeName: 'public',
      curPickBgm: {
        id: '',
        name: '',
        src: ''
      },
      userBgmLists: [],
      publicBGMs: []
    }
  },
  computed: {
    pickBgm () {
      return this.$store.getters.pickBgm
    }
  },
  methods: {
    handleClick () {
      const activeName = this.activeName
      if (activeName === 'user' && this.hasFetchData === false) {
        getUserBGMs().then((res) => {
          this.hasFetchData = true
          this.userBgmLists = res.lists
        }).catch(() => {
          // this.userBgmStatus = false
          this.$notify.error({
            title: '错误',
            message: '背景乐列表获取失败'
          })
        })
      }
    },
    handlePlay (bgm) {
      const music = this.$refs.music
      if (this.isPlay && (music.src === bgm.src)) {
        this.isPlay = false
        music.pause()
      } else {
        this.isPlay = true
        music.src = bgm.src
        music.play()
      }
    },
    pick (bgm) {
      Object.assign(this.curPickBgm, bgm)
    },
    handleCancel () {
      if (this.isPlay) {
        this.$refs.music.pause()
      }
      this.curPickBgm.id = ''
      this.$store.commit('SET_PICK_BGM', false)
    },
    handleConfirm () {
      this.pickBgm && this.pickBgm.callback && this.pickBgm.callback(this.curPickBgm)
      this.handleCancel()
    }
  },
  mounted () {
    this.hasFetchData = false
    getPublicBGMs().then((res) => {
      this.publicBGMs = res.lists
    }).catch(() => {
      // this.publicBgmStatus = false
      this.$notify.error({
        title: '错误',
        message: '图片列表获取失败'
      })
    })
  },
  components: {
    bgmLists: lists
  }
}
</script>
