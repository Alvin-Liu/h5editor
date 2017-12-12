<template>
  <div id="app">
    <div id="topbar">
      
    </div>
    <!-- 组件列表 -->
    <module-lists />
    <div id="view">
      <swiper :options="swiperOption" ref="mySwiper" id="containers">
        <swiper-slide 
          v-for="(ctn, index) in pages"
          :key="index"
          :class="'page-' + index">
          <container 
            :complists="ctn.comps"
            :id="ctn.id" 
          />
        </swiper-slide>
      </swiper>
    </div>
    
    <!-- 属性编辑面板 -->
    <attr-panel />
  </div>
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
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    pages () {
      return this.$store.getters.pages
    }
  },
  mounted () {
    const vm = this
    this.swiper.on('slideChangeTransitionEnd', function () {
      vm.$store.commit('SET_CUR_PAGE_INDEX', this.activeIndex)
    })
  }
}
</script>
