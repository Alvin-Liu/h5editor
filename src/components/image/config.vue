<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="内容" name="content"></el-tab-pane>
    <el-tab-pane label="风格" name="style"></el-tab-pane>
    <el-tab-pane label="动画" name="animate"></el-tab-pane>
    <el-tab-pane label="样式" name="css">
      <el-collapse accordion>
        <el-collapse-item title="基础属性" name="1" class="h-from">
          <!-- <div class="item">
            宽度：<input class="h-input" type="number" :value="css.w" name="width" @input="updateCss($event, 'w')" placeholder="宽度" />
          </div>
          <div class="item">
            高度：<input class="h-input" type="number" :value="css.h" name="height" @input="updateCss($event, 'h')" placeholder="高度" />
          </div> -->
          <div class="item">
            背景色：<el-color-picker :value="css.bgc" @change="updateCssBg" />
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'imageConfig',
  props: {
    compid: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
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
    updateCssBg (value) {
      this.$store.commit('EDIT_COMP', {
        type: 'css',
        compid: this.compid,
        value: {
          'bgc': value
        }
      })
    },
    updateCss (e, prop) {
      const target = e.target
      let value = target.value
      if (target.type === 'number') {
        value = +value
      }
      this.$store.commit('EDIT_COMP', {
        type: 'css',
        compid: this.compid,
        value: {
          [prop]: value
        }
      })
    }
  }
}
</script>
