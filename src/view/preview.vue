<template>
  <div id="preview" class="m-simulator">
    <div class="wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide 
          v-for="(page, idx) in pages"
          :key="page.id">
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
