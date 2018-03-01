<template>
  <el-container id="view">
    <el-header class="s-bg-main g-hd" height="auto">
      <topbar />
    </el-header>
    <el-container>
      <el-aside>
        <!-- 属性编辑面板 -->
        <props-panel />
      </el-aside>
      <!-- 编辑视图面板 -->
      <el-main id="workspace">
        <div class="m-simulator work-part">
          <div class="wrap">
            <container />
          </div>
        </div>
      </el-main>
      <el-aside>
        <page-panel />
      </el-aside>
      <!-- 图片选取 -->
      <pick-image />
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'index',
  components: {
    pagePanel: () => import('@/modules/panel'),
    topbar: () => import('@/modules/topbar'),
    container: () => import('@/modules/container'),
    propsPanel: () => import('@/modules/props'),
    pickImage: () => import('@/dialog/pick-image/index')
  }
}
</script>
