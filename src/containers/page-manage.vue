<template>
  <ly-panel class="page-manage" header="页面管理">
    <ul class="u-lst f-cb">
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
  </ly-panel>
</template>

<script>
export default {
  name: 'PageManage',
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
  },
  components: {
    lyPanel: () => import('@/layouts/ly-panel')
  }
}
</script>
<style lang="scss">
  $main_border_color: #ddd;
  $font_color: #666;

  .page-manage {
    border-top: 1px solid #666;
    .u-lst {
      > li {
        padding: 15px;
        border: 1px solid $main_border_color;
        margin-bottom: 10px;
        color: $font_color;
        cursor: pointer;
        &.active {
          color: #fff;
          background-color: #59c7f9;
        }
      }
    }
  }
</style>
