<template>
  <div class="tpl-lists">
    <div class="item" @click="addNewModule('cImage')">图片</div>
  </div>
</template>

<script>
export default {
  name: 'modules',
  methods: {
    addNewModule (name) {
      this.$store.dispatch('addNewComp', name)
    }
  }
}
</script>
