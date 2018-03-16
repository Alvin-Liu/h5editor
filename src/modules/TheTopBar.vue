<template>
  <div class="g-wrap">
    <div class="g-mn">
      <TheCompLists />
    </div>
    <div class="g-sd fl">
      <a href="/" class="logo">H5EDITOR</a>
    </div>
    <div class="g-sd fr">
      <div class="actions">
        <el-button type="primary" @click="$store.dispatch('saveUserData')">保存</el-button>
        <el-button type="success" @click="preview">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTopBar',
  computed: {
    pages () {
      return this.$store.getters.pages
    },
    curPageId: {
      get () {
        return this.$store.getters.curPageId
      },
      set (val) {
        this.$store.commit('SET_CUR_PAGE_INDEX', val)
      }
    }
  },
  methods: {
    preview () {
      this.$router.push('/preview')
    }
  },
  components: {
    TheCompLists: () => import('./TheCompLists')
  }
}
</script>
