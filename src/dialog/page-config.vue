<template>
  <el-collapse accordion v-model="activeCollapse">
    <el-collapse-item title="基础属性" name="1" class="h-from">
      <div class="item-group f-vama">
        <div class="item">
          <label>背景色:</label>
          <el-color-picker :value="css.bg.c" @change="updateCssBg" size="mini" />
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'pageConfig',
  data () {
    return {
      activeCollapse: '1'
    }
  },
  computed: {
    pg () {
      return this.$store.getters.curPage
    },
    css () {
      return this.pg.css
    }
  },
  methods: {
    updateCssBg (value) {
      this.updateCss({
        key: 'bg',
        value: {
          c: value
        }
      })
    },
    updateCss ({ key, value }) {
      this.$store.commit('EDIT_PAGE', {
        type: 'css',
        pageId: this.pg.id,
        value: {
          [key]: value
        }
      })
    }
  }
}
</script>
