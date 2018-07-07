<template>
  <el-form ref="form" :model="form" label-width="40px">
    <el-form-item label="宽度">
      <el-input v-model.number="form.w" type="number" @change="handleChange"></el-input>
    </el-form-item>
    <el-form-item label="高度">
      <el-input v-model.number="form.h" type="number" @change="handleChange"></el-input>
    </el-form-item>
    <el-form-item label="X">
      <el-input v-model.number="form.x" type="number" @change="handleChange"></el-input>
    </el-form-item>
    <el-form-item label="Y">
      <el-input v-model.number="form.y" type="number" @change="handleChange"></el-input>
    </el-form-item>
    <el-form-item label="圆角">
      <el-slider v-model.number="form.br" show-input @change="handleChange"></el-slider>
    </el-form-item>
    <el-form-item label="旋转">
      <el-slider v-model.number="form.rotate" :max="360" show-input @change="handleChange"></el-slider>
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
      form: this.value
    }
  },
  methods: {
    handleChange () {
      this.$emit('change', {
        key: 'background',
        value: this.form
      })
    }
  }
}
</script>
