<template>
  <el-container id="view">
    <el-header class="s-bg-main g-hd" height="auto">
      <the-topBar />
    </el-header>
    <el-container>
      <el-aside>
        <the-prop-manage />
      </el-aside>
      <!-- 编辑视图面板 -->
      <el-main id="workspace">
        <div class="m-simulator work-part">
          <div class="wrap">
            <the-container />
          </div>
        </div>
      </el-main>
      <el-aside>
        <the-page-manage />
      </el-aside>
      <!-- 图片选取 -->
      <pick-image />
      <!-- 背景乐选取 -->
      <pick-bg-music />
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'index',
  components: {
    ThePageManage: () => import('@/modules/ThePageManage'),
    TheTopBar: () => import('@/modules/TheTopBar'),
    TheContainer: () => import('@/modules/TheContainer'),
    ThePropManage: () => import('@/modules/ThePropManage'),
    PickImage: () => import('@/dialog/PickImage/index'),
    PickBgMusic: () => import('@/dialog/PickBgMusic/index')
  }
}
</script>
