<template>
  <el-container class="ly-mn">
    <el-aside>
      <slot name="left"></slot>
    </el-aside>
    <el-main class="mnc">
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
<style lang="scss">
  .ly-mn {
    > .mnc {
      position: relative;
    }
  }
</style>
