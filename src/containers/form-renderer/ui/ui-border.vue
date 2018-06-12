<template>
  <div class="item-group m-bd f-vama">
    <div class="item">
      <label>宽度:</label>
      <input type="text" v-model="bd.width" @change="handleChange">
    </div>
    <div class="item">
      <label>样式:</label>
      <select name="border-style" v-model.number="bd.type" @change="handleChange">
        <option
          v-for="(bs, key) in bss"
          :key="key"
          :value="key">
          {{ bs }}
        </option>
      </select>
    </div>
    <div class="item">
      <label>颜色:</label>
      <el-color-picker v-model="bd.color" @change="handleChange" size="mini" />
    </div>
  </div>
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
