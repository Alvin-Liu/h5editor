<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    this.$store.dispatch('getUserData')
  }
}
</script>
