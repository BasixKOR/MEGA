<template>
  <img :src="imgSrc" class="img-fluid img-thumbnail" :style="`background:${color};`" id="preview">
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'preview-image',
  computed: {
    ...mapState(['year', 'color']),
    imgSrc () {
      let img = require.context('../assets/', true)
      return img(`./egg-${this.year}-250px.png`)
    }
  }
}
</script>
