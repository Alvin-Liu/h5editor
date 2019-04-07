<template>
  <el-collapse accordion>
    <el-collapse-item title="文字" class="h-from" v-if="content.text">
      <el-input v-model="content.text" @input="handleChange" />
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'textConfig',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleChange (val) {
      this.$emit('update', 'text', val)
    }
  }
}
</script>
