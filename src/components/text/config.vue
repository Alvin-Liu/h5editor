<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="动画" name="animate"></el-tab-pane>
    <el-tab-pane label="样式" name="css">
      <el-collapse accordion v-model="activeCollapse">
        <el-collapse-item title="基础属性" name="1" class="h-from f-vama">
          <div class="item-group f-vama">
            <div class="item">
              <label>背景色:</label><el-color-picker :value="css.bgc" @change="updateCssBg" size="mini" />
            </div>
            <div class="item">
              <label>圆角:</label><input type="text" :value="css.br" @change="updateCss({ key: 'br', value: $event.target.value })">
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="字体属性" class="h-from">
          <f-font :value="css.ft" @change="updateCss" />
        </el-collapse-item>
        <el-collapse-item title="边框属性" name="1" class="h-from">
          <f-bd :value="css.bd" @change="updateCss" />
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'textConfig',
  props: {
    compid: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      activeCollapse: '1',
      activeName: 'css'
    }
  },
  computed: {
    cm () {
      return this.$store.getters.getCompConfigByCompid(this.compid)
    },
    css () {
      return this.cm.css
    }
  },
  methods: {
    updateCssFontColor (value) {
      this.updateCss({
        key: 'ft',
        value: {
          c: value
        }
      })
    },
    updateCssBg (value) {
      this.updateCss({key: 'bgc', value: value})
    },
    updateCss ({ key, value }) {
      console.log(key, value)
      this.$store.commit('EDIT_COMP', {
        type: 'css',
        compid: this.compid,
        value: {
          [key]: value
        }
      })
    }
  }
}
</script>
