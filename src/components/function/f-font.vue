<template>
  <div class="item-group m-ft f-vama">
    <div class="item">
      <label>字体:</label>
      <select name="font-family" v-model.number="ft.type" @change="handleChange">
        <option
          v-for="(fm, key) in fms"
          :key="key"
          :value="key">
          {{ fm }}
        </option>
      </select>
    </div>
    <div class="item">
      <label>字号:</label>
      <select name="font-size" v-model.number="ft.size" @change="handleChange">
        <option
          v-for="(fs, key) in fss"
          :key="key"
          :value="key">
          {{ fs }}
        </option>
      </select>
    </div>
    <div class="item">
      <label>颜色:</label>
      <el-color-picker v-model="ft.color" @change="handleChange" size="mini" />
    </div>
  </div>
</template>
<script>

import {
  FONT_FAMILYS,
  FONT_SIZES
} from '@/config/style-match.js'
export default {
  name: 'FFont',
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
        type: font.t,
        hover: font.h
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
          h: ft.hover,
          c: ft.color
        }
      })
    }
  }
}
</script>
