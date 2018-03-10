<template>
  <el-container class="h-full">
    <el-header height="40px" class="panel-header s-bg-sub">页面设置</el-header>
    <el-main class="f-cb s-bg-white">
      <ul class="page-lists">
        <li
          v-for="(itm, idx) in pages"
          :keys="idx"
          :class="{ 'active': curPageId == itm.id }"
          @click="curPageId = itm.id">
          <span>第{{ idx + 1 }}页</span>
          <el-dropdown class="f-fr" @command="handleCommand">
            <i class="el-icon-more"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="insert">新建页面</el-dropdown-item>
              <el-dropdown-item command="edit">页面设置</el-dropdown-item>
              <!-- <el-dropdown-item command="copy">复制页面</el-dropdown-item> -->
              <el-dropdown-item command="remove">删除页面</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
  },
  methods: {
    handleCommand (command) {
      const pageId = this.curPageId
      const commandToAction = {
        insert: 'insertPage',
        copy: 'copyPage',
        remove: 'removePage',
        edit: 'openEditPage'
      }
      this.$store.dispatch(commandToAction[command], pageId)
    }
  }
}
</script>
