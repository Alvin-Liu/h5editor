<template>
  <ul class="bgm-lists">
    <li v-for="bgm in lists" :key="bgm.id" @click="pickBgm(bgm)" class="f-cb">
      <span>{{ bgm.name }}.{{ bgm.type }}</span>
      <span class="origin">音乐来源： {{ bgm.origin }}</span>
      <a href="#" class="f-fr" @click="playMusic(bgm)"><i class="el-icon-service"></i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'bgm-lists',
  props: {
    lists: {
      type: Array
    },
    active: {
      type: Object
    }
  },
  methods: {
    pickBgm (bgm) {
      this.$emit('pick', bgm)
    },
    playMusic (bgm) {
      this.$emit('play', bgm)
    }
  }
}
</script>
