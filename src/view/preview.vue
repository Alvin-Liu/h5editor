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
          <vlist 
            v-for="comp in page.comps"
            :compid="comp.id"
            class="comp animated"
            :class="{[animations[comp.anim.type]['class']]: activePage === idx}"
            :name="comp.name"
            :key="comp.id">
          </vlist>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import vcomps from '@/components'
import { ANI_NAME } from '@/config/animation-match.js'
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
    vlist: {
      props: {
        name: {
          type: String,
          required: true
        },
        compid: {
          type: [String, Number],
          required: true
        }
      },
      render (h) {
        const module = vcomps[this.name]
        return h(module, {
          props: {
            compid: this.compid
          }
        })
      }
    }
  }
}
</script>
