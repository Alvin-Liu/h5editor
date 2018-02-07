<template>
  <div id="preview" class="m-simulator">
    <div class="wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide 
          v-for="page in pages"
          :key="page.id">
          <vlist 
            v-for="comp in page.comps"
            :compid="comp.id"
            class="comp"
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
export default {
  name: 'Preview',
  data () {
    return {
      swiperOption: {
        direction: 'vertical'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    pages () {
      return this.$store.getters.pages
    }
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
