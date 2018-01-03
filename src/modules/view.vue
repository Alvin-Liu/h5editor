<template>
  <el-container>
    <el-header class="bg-main" height="8vh"></el-header>
    <el-container style="height: 92vh">
      <!-- 组件列表 -->
      <el-aside>
        <module-lists />
      </el-aside>
      <!-- 编辑视图面板 -->
      <el-main>
        <div id="workspace" class="workspace">
          <!-- <swiper :options="swiperOption" ref="mySwiper" id="containers">
            <swiper-slide 
              v-for="(ctn, index) in pages"
              :key="index"
              :class="'page-' + index">
              <container 
                :complists="ctn.comps"
                :id="ctn.id" 
              />
            </swiper-slide>
          </swiper> -->
          <container :complists="curPage.comps" :id="curPage.id" />
        </div>
      </el-main>
      <!-- 属性编辑面板 -->
      <el-aside>
        <attr-panel />
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'app',
  data () {
    return {
      currentPage: 0,
      swiperOption: {
        direction: 'vertical'
      }
    }
  },
  components: {
    moduleLists: () => import('./modules/modules'),
    attrPanel: () => import('./modules/panel'),
    container: () => import('./modules/container'),
    swiper,
    swiperSlide
  },
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // },
    curPage () {
      return this.$store.getters.curPage
    }
  },
  mounted () {
    // const vm = this
    // this.swiper.on('slideChangeTransitionEnd', function () {
    //   vm.$store.commit('SET_CUR_PAGE_INDEX', this.activeIndex)
    // })
  }
}
</script>
