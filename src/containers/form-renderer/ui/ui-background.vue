<template>
  <el-form ref="form" :model="form" label-width="40px">
    <el-form-item label="颜色">
      <el-color-picker v-model="form.c" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'UIBase',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      form: Object.assign({}, this.value)
    }
  },
  watch: {
    form: {
      handler (val, oldVal) {
        this.$emit('change', {
          key: 'bg',
          value: val
        })
      },
      deep: true
    }
  }
}
</script>
