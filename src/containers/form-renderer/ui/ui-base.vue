<template>
  <el-form ref="form" :model="form" label-width="40px">
    <el-form-item label="宽度">
      <el-input v-model.number="form.w" type="number"></el-input>
    </el-form-item>
    <el-form-item label="高度">
      <el-input v-model.number="form.h" type="number"></el-input>
    </el-form-item>
    <el-form-item label="X">
      <el-input v-model.number="form.x" type="number"></el-input>
    </el-form-item>
    <el-form-item label="Y">
      <el-input v-model.number="form.y" type="number"></el-input>
    </el-form-item>
    <el-form-item label="圆角">
      <el-slider v-model.number="form.br" show-input></el-slider>
    </el-form-item>
    <el-form-item label="旋转">
      <el-slider v-model.number="form.rotate" show-input></el-slider>
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
          key: 'base',
          value: val
        })
      },
      deep: true
    }
  }
}
</script>
