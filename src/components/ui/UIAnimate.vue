<template>
  <ul class="m-animations">
    <li v-for="(animate, key) in animations"
      :key="key">
      <el-button type="primary" size="small" @click="handleChangeType(key )">
        {{ animate.name }}
        <i v-if="ani.type == key" class="el-icon-circle-check el-icon--right"></i>
      </el-button>
    </li>
  </ul>
</template>

<script>
import { ANI_NAME } from '@/config/animation-match.js'

export default {
  name: 'UIAnimate',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    const defaultAni = {
      type: 1,
      duration: 1,
      delay: 0.4
    }
    return {
      animations: ANI_NAME,
      ani: Object.assign(defaultAni, this.value)
    }
  },
  methods: {
    handleChangeType (type) {
      this.ani.type = type
      this.handleChange()
    },
    handleChange () {
      const ani = this.ani
      this.$emit('change', {
        key: 'anim',
        value: {
          type: +ani.type,
          duration: ani.duration,
          delay: ani.delay
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .m-animations {
    > li {
      float: left;
      width: 46%;
      margin: 10px 0;
      text-align: center;
      &:nth-child(2n) {
        margin-left: 2%;
      }
    }
  }
</style>