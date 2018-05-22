<template>
  <div class="ly-hd">
    <div class="logo">
      <router-link to="/">H5EDITOR</router-link>
    </div>
    <div class="g-mn">
      <slot name="middle"></slot>
    </div>
    <div class="g-sd">
      <slot name="action-btns"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lyHeader'
}
</script>
<style lang="scss">
  .ly-hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo a {
      line-height: 50px;
      font-size: 24px;
      color: #fff;
    }
    > .g-mn {
      flex: 1
    }
  }
</style>
