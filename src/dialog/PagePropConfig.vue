<template>
  <el-collapse accordion v-model="activeCollapse">
    <el-collapse-item title="基础属性" name="1" class="h-from">
      <div class="item-group f-vama">
        <div class="item item-page-background">
          <label>背景图:</label>
          <div class="img-box" :style="{backgroundImage: 'url('+ css.bgi +')'}"></div>
          <div class="actions">
            <el-button type="primary" size="mini" @click="openImageDialog">选择</el-button>
            <el-button type="danger" size="mini" v-show="notEmptyBgi" @click="clearBgImageUrl">删除</el-button>
          </div>
        </div>
        <div class="item">
          <label>背景色:</label>
          <el-color-picker :value="css.bgc" @change="updateBgc" size="mini" />
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'PagePropConfig',
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
    },
    notEmptyBgi () {
      return this.css.bgi !== ''
    }
  },
  methods: {
    updateBgc (value) {
      this.update({
        key: 'bgc',
        value: value
      })
    },
    clearBgImageUrl () {
      this.update({
        key: 'bgi',
        value: ''
      })
    },
    update ({ key, value }) {
      this.$store.commit('EDIT_PAGE', {
        type: 'css',
        pageId: this.pg.id,
        value: {
          [key]: value
        }
      })
    },
    openImageDialog () {
      this.$store.commit('SET_PICK_IMG', {
        status: true,
        callback: (img) => {
          this.update({
            key: 'bgi',
            value: img.url
          })
        }
      })
    }
  }
}
</script>
