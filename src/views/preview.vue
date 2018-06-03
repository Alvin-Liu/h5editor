<template>
  <div class="preview">
    <router-link to="/" class="u-back"><i class="el-icon-arrow-left"></i>返回</router-link>
    <ly-mobile>
      <div class="bgm-btn"
        v-if="h5Config.bgm"
        :class="{rotate: isPlay}" 
        @click="togglePlay">
        <audio ref="music" :src="h5Config.bgm" autoplay preload="auto" loop></audio>
      </div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide 
          v-for="(page, idx) in pages"
          :key="page.id">
          <div class="wrap-bg" 
            :style="{
              backgroundColor: page.css.bgc,
              backgroundImage: 'url(' + page.css.bgi + ')'
            }"></div>
          <div
            v-for="comp in page.comps"
            class="animated"
            :class="{[animations[comp.anim.type]['class']]: activePage === idx}"
            :key="comp.id">
            <component-renderer :comp="comp"></component-renderer>
          </div>
        </swiper-slide>
      </swiper>
    </ly-mobile>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ComponentRenderer from '@/modules/ComponentRenderer'
import { ANI_NAME } from '@/config/animation-match.js'
import lyMobile from '@/layouts/lyMobile'

export default {
  name: 'Preview',
  data () {
    return {
      isPlay: true,
      activePage: 0,
      animations: ANI_NAME,
      swiperOption: {
        direction: 'vertical'
      }
    }
  },
  computed: {
    Swiper () {
      return this.$refs.mySwiper.swiper
    },
    pages () {
      return this.$store.getters.pages
    },
    h5Config () {
      return this.$store.getters.h5Config
    }
  },
  methods: {
    togglePlay () {
      const music = this.$refs.music
      if (this.isPlay) {
        this.isPlay = false
        music.pause()
      } else {
        this.isPlay = true
        music.play()
      }
    }
  },
  mounted () {
    const self = this
    this.Swiper.on('init', function () {
      self.activePage = this.activeIndex
    })
    this.Swiper.on('slideChangeTransitionStart', function () {
      self.activePage = this.activeIndex
    })
    // this.Swiper.on('slideChangeTransitionEnd', function () {
    //   self.activePage = null
    // })
  },
  components: {
    swiper,
    swiperSlide,
    lyMobile,
    ComponentRenderer
  }
}
</script>
<style lang="scss">
  $view_width: 320px;
  $view_height: 486px;

  .preview {
    overflow: hidden;
    position: relative;
    height: 100%;
    .comp {
      position: absolute
    }
  }

  .wrap-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    background-position: 50% 50%;
  }

  .u-back {
    float: left;
    margin: 10px;
    color: #409eff;
    font-size: 18px;
    font-weight: bold;
  }  
</style>