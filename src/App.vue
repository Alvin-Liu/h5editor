<template>
  <el-container>
    <el-header class="bg-main" height="8vh">
      <topbar />
    </el-header>
    <el-container style="height: 92vh">
      <!-- 组件列表 -->
      <el-aside>
        <module-lists />
      </el-aside>
      <!-- 编辑视图面板 -->
      <el-main>
        <div id="workspace" class="workspace">
          <div class="wrap">
            <container />
          </div>
        </div>
      </el-main>
      <!-- 属性编辑面板 -->
      <el-aside>
        <attr-panel />
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'app',
  components: {
    moduleLists: () => import('./modules/modules'),
    attrPanel: () => import('./modules/panel'),
    topbar: () => import('./modules/topbar'),
    container: () => import('./modules/container')
  },
  beforeCreate () {
    this.$store.dispatch('getUserData')
  }
}
</script>
