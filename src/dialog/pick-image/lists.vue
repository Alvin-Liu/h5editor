<template>
  <ul class="img-lists">
    <li v-for="img in lists" @click="pickImg(img)">
      <div class="imgbox">
        <div class="box">
          <img :src="img.url" :alt="img.name" :title="img.name">
          <i v-if="curPickImg.id === img.id" class="el-icon-success"></i>
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
    }
  },
  data () {
    return {
      curPickImg: {
        name: '',
        desc: '',
        url: ''
      }
    }
  },
  methods: {
    pickImg (img) {
      this.curPickImg = img
      this.$emit('pick', img)
    }
  }
}
</script>
