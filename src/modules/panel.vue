<template>
  <el-container class="h-full">
    <el-header height="40px" class="panel-header bg-sub">页面设置</el-header>
    <el-main class="f-cb bg-white">
      <ul class="page-lists">
        <li
          v-for="(itm, idx) in pages"
          :keys="idx"
          :class="{ 'active': curPageId == itm.id }"
          @click="curPageId = itm.id">
          <span>第{{ idx + 1 }}页</span>
          <i class="el-icon-delete f-fr" @click="$store.dispatch('removePage', itm.id)"></i>
        </li>
      </ul>
      <el-button type="primary" @click="$store.dispatch('addNewPage')">新增页面</el-button>
    </el-main>
  </el-container>
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
        this.$store.commit('TOGGLE_PAGE', val)
      }
    }
  }
}
</script>
