<template>
  <img :src="imgSrc" class="img-fluid img-thumbnail" :style="background" id="preview">
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'preview-image',
  computed: {
    ...mapState(['year', 'color', 'image']),
    ...mapGetters(['background']),
    imgSrc () {
      let img = require.context('../assets/', true)
      return img(`./egg-${this.year}-250px.png`)
    }
  }
}
</script>
