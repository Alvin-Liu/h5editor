<template>
  <div class="c-image">
    <a href="#">
      <img :src="imgUrl" alt="img">
    </a>
  </div>
</template>

<script>
export default {
  name: 'image',
  data () {
    return {
      imgUrl: 'static/images/logo.png'
    }
  }
}
</script>
<style lang="scss">
  .c-image {
    a {
      display: block;
      img {
        width: 100%;
      }
    }
  }
</style>
