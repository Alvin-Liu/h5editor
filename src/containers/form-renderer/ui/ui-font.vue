<template>
  <el-form ref="form" :model="ft" label-width="60px">
    <el-form-item label="字体">
      <el-select v-model.number="ft.type" placeholder="请选择" @change="handleChange">
        <el-option
          v-for="(fm, key) in fms"
          :key="key"
          :label="fm"
          :value="key">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="字号">
      <el-select v-model="ft.size" placeholder="请选择" @change="handleChange">
        <el-option
          v-for="(fs, key) in fss"
          :key="key"
          :label="fs"
          :value="+key">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="颜色">
      <el-color-picker v-model="ft.color" @change="handleChange" />
    </el-form-item>
  </el-form>
</template>
<script>

import {
  FONT_FAMILYS,
  FONT_SIZES
} from '@/const/style-match.js'
export default {
  name: 'UIFont',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    const font = this.value
    return {
      fms: FONT_FAMILYS,
      fss: FONT_SIZES,
      ft: {
        color: font.c,
        size: font.s,
        type: font.t
      }
    }
  },
  methods: {
    handleChange () {
      const ft = this.ft
      this.$emit('change', {
        key: 'ft',
        value: {
          s: ft.size,
          t: ft.type,
          c: ft.color
        }
      })
    }
  }
}
</script>
