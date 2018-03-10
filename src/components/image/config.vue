<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="动画" name="animate"></el-tab-pane>
    <el-tab-pane label="样式" name="css">
      <el-collapse accordion>
        <el-collapse-item title="基础属性" name="1" class="h-from">
          <div class="item-group f-vama">
            <div class="item">
              <label>背景色:</label><el-color-picker :value="css.bgc" @change="updateCssBg" size="mini" />
            </div>
            <div class="item">
              <label>圆角:</label><input type="text" :value="css.br" @change="updateCss({ key: 'br', value: $event.target.value })">
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="边框属性" class="h-from">
          <f-bd :value="css.bd" @change="updateCss" />
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import compConfig from '@/mixins/comp-config.js'
export default {
  name: 'imageConfig',
  mixins: [compConfig]
}
</script>
