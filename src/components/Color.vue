<template>
  <div :style="'background:'+color" class="palatte" @click="clicked"></div>
</template>

<script scoped>
export default {
  name: 'color',
  props: ['color'],
  methods: {
    clicked () {
      this.$store.state.color = this.color.toString()
      this.$store.commit()
    }
  }
}
</script>

<style>
.palatte {
  float: left;
  width: 2em;
  height: 2em;
  background: red;
  margin: 5px;

  border-radius: 50%;
  box-shadow: 0px 0px 5px grey;
}
</style>
