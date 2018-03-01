<template>
  <div class="m-ft">
    <div class="line">
      <textarea name="text" cols="30" rows="10"></textarea>
    </div>
    <div class="line">
      <label>字体</label>
      <select name="font-family">
        <option value="0">微软雅黑</option>
        <option value="1">宋体</option>
        <option value="2">楷体</option>
        <option value="3">仿宋</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FFont',
  props: {
    ft: {
      type: Object,
      required: true
    }
  }
}
</script>
