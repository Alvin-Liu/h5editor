<template>
  <div id="preview" class="m-simulator">
    <div class="wrap">
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
            <comp-lists
              :comp="comp"
              :style="comp.css | calcStyle"
              class="comp"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BaseComps from '@/components'
import { ANI_NAME } from '@/config/animation-match.js'

const BASE_COMP_NAME = 'Base'

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
    CompLists: {
      props: {
        comp: {
          type: Object,
          required: true
        }
      },
      render (h) {
        const { name, id, css } = this.comp
        const module = BaseComps[BASE_COMP_NAME + name]
        return h(module, {
          props: {
            compid: id
          },
          style: {
            transform: `rotate(${css.rotate}deg)`
          }
        })
      }
    }
  }
}
</script>
