<template>
  <ul class="img-lists">
    <li v-for="img in lists" :key="img.id" @click="pickImg(img)">
      <div class="imgbox">
        <div class="box">
          <img :src="img.url" :alt="img.name" :title="img.name">
          <i v-if="active.id === img.id" class="el-icon-success"></i>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'img-lists',
  props: {
    lists: {
      type: Array
    },
    active: {
      type: Object
    }
  },
  methods: {
    pickImg (img) {
      this.$emit('pick', img)
    }
  }
}
</script>

<style lang="scss">
  // img-pick
  .img-lists {
    overflow: hidden;
    height: 40vh;
    overflow: auto;
    > li {
      float: left;
      width: 25%;
      padding: 5px;
    }
    .imgbox {
      display: table;
      position: relative;
      border: 1px solid #eee;
      width: 100%;
      height: 129px;
      text-align: center;
      > .box {
        vertical-align: middle;
        display: table-cell;
        img {
          width: auto;
          max-width: 100%;
          max-height: 119px;
          display: inline-block;
          vertical-align: middle;
        }
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 36px;
          color: green;
        }
      }
    }
  }
</style>
