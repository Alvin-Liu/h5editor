<template>
  <el-container>
    <el-header class="bg-main g-hd" height="8vh">
      <topbar />
    </el-header>
    <el-container style="height: 92vh">
      <el-aside>
      </el-aside>
      <!-- 编辑视图面板 -->
      <el-main>
        <div id="workspace" class="workspace">
          <div class="wrap">
            <container />
          </div>
        </div>
      </el-main>
      <el-aside>
        <page-panel />
      </el-aside>
      <!-- 属性编辑面板 -->
      <props-panel />
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'app',
  components: {
    pagePanel: () => import('./modules/panel'),
    topbar: () => import('./modules/topbar'),
    container: () => import('./modules/container'),
    propsPanel: () => import('./modules/props')
  },
  beforeCreate () {
    this.$store.dispatch('getUserData')
  }
}
</script>
