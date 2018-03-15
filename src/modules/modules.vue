<template>
  <div class="m-comps">
    <div class="itm" @click="addNewModule('cImage')">图片</div>
    <div class="itm" @click="addNewModule('cText')">文字</div>
    <div class="itm" @click="openMusicDialog">音乐</div>
  </div>
</template>

<script>
export default {
  name: 'modules',
  methods: {
    addNewModule (name) {
      this.$store.dispatch('addNewComp', name)
    },
    openMusicDialog (name) {
      this.$store.commit('SET_PICK_BGM', {
        status: true,
        callback: (bgm) => {
          this.$store.dispatch('setH5', {
            bgm: bgm.src
          })
        }
      })
    }
  }
}
</script>
