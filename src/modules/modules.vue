<template>
  <div class="m-comps">
    <div class="itm" @click="addNewModule('cImage')">图片</div>
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
