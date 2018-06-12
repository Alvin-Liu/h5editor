<template>
  <div class="ly-box">
    <div class="wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lyMobile'
}
</script>
<style lang="scss">
  $view_width: 320px;
  $view_height: 486px;

  .ly-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: $view_width + 8px;
    height: $view_height + 74px;
    margin-left: -($view_width + 8px) / 2;
    margin-top: -($view_height + 74px) / 2;
    background-image: url(../assets/phonewhite-7a04c3.svg);
    background-repeat: no-repeat;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    border-radius: 40px;
    > .wrap {
      position: absolute;
      top: 37px;
      left: 4px;
      width: $view_width;
      height: $view_height;
      background-color: #fff
    }
  }
</style>
