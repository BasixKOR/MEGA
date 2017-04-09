<template>
  <div class="row" id="color-row">
    <div class="col-md-4 title">{{ year }}</div>
    <div class="col-md-6 clear">
      <color v-for="hex in colors" :color="hex" :key="hex" />
    </div>
  </div>
</template>

<script>
import Color from './Color'
export default {
  name: 'color-row',
  components: { Color },
  props: {
    year: [String, Number], colors: Array
  }
}
</script>

<style scoped>
.palatte {
  position: relative;
  top: 0.3em;
}
.title {
  text-align: right;
  font-size: 2em;
}
.clear {
  clear: left;
}
</style>
