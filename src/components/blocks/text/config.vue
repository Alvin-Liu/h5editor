<template>
  <form-renderer :content="cm"></form-renderer>
</template>

<script>
import formRenderer from '@/containers/form-renderer'
export default {
  name: 'textConfig',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    cm () {
      return this.$store.getters.getCompConfigByCompid(this.id)
    }
  },
  components: {
    formRenderer
  }
}
</script>
