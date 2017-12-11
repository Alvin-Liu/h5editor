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
          <container :id="ctn.id" />
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
      iSlider: null,
      pages: [{
        id: 1,
        style: {},
        comps: []
      }, {
        id: 2,
        style: {},
        comps: []
      }, {
        id: 3,
        style: {},
        comps: []
      }],
      swiperOption: {
        loop: true,
        direction: 'vertical',
        on: {
          slideChangeTransitionEnd: function () {
            console.log(this.activeIndex)  // 切换结束时，告诉我现在是第几个slide
          }
        }
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
    }
  }
}
</script>
