<template>
  <ul class="img-lists">
    <li v-for="img in lists" @click="pickImg(img)">
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
