<template>
  <el-form ref="form" :model="bd" label-width="40px">
    <el-form-item label="宽度">
      <el-input v-model.number="bd.width" type="number" placeholder="请输入" @change="handleChange"></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select placeholder="请选择" v-model="bd.type" @change="handleChange">
        <el-option
          v-for="(bs, key) in bss"
          :key="key"
          :label="bs"
          :value="+key">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="颜色">
      <el-color-picker v-model="bd.color" @change="handleChange" />
    </el-form-item>
  </el-form>
</template>

<script>
import { BORDER_STYLES } from '@/const/style-match.js'

export default {
  name: 'UIBorder',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    const bd = this.value
    return {
      bss: BORDER_STYLES,
      bd: {
        color: bd.c,
        type: bd.t,
        width: bd.w
      }
    }
  },
  methods: {
    handleChange () {
      const bd = this.bd
      console.log(bd)
      this.$emit('change', {
        key: 'bd',
        value: {
          w: bd.width,
          t: bd.type,
          c: bd.color
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .item-group {
    width: 200px;
    margin: 0 auto;
    > .item {
      overflow: hidden;
      margin: 10px 0;
    }
    label {
      display: inline-block;
      width: 60px;
      margin-right: 10px;
      text-align: right;
      font-size: 14px;
      letter-spacing: 2px;
    }
    input {
      width: 100px;
      padding: 5px 10px;
    }
    select {
      min-width: 100px;
      padding: 5px 10px;
    }
  }
</style>
