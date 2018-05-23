<template>
  <el-container class="ly-mn">
    <el-aside>
      <slot name="left"></slot>
    </el-aside>
    <el-main id="workspace">
      <slot name="main"></slot>
    </el-main>
    <el-aside>
      <slot name="right"></slot>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'lyMain'
}
</script>
