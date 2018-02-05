<template>
  <div class="header-ctn">
    <module-lists />
    <div class="actions">
      <el-button type="primary" @click="$store.dispatch('saveUserData')">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modules',
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
  components: {
    moduleLists: () => import('./modules')
  }
}
</script>
