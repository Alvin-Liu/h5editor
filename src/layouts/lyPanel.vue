<template>
  <div class="ly-pn">
    <div class="hd" height="auto" :style="{ backgroundColor: panelColor }">
      {{ header }}
      <slot v-if="!header" name="header"></slot>
    </div>
    <div class="mn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lyMain',
  props: {
    header: String,
    panelColor: {
      type: String,
      default: '#31364a'
    }
  }
}
</script>
<style lang="scss">
  .ly-pn {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fff;
    > .hd {
      color: #fff;
      padding: 18px 20px;
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
      font-size: 16px;
    }
    > .mn {
      flex: 1;
      padding: 10px;
    }
  }
</style>
