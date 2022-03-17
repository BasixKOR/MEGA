<template>
  <div class="row" id="configure">
    <div class="col-md-7">
      <h1>색상을 선택하세요.</h1>
      <chrome-picker v-model="colorPickerObject" @change-color="onChange"></chrome-picker>
      <br>
      <color-row year="2014" :colors="color2014" />
      <color-row year="2010" :colors="color2010" />
      <color-row year="2009" :colors="color2009" />
      <br>
      <b-form-file v-model="file" @input="blobToDataURL" />
      <b-button variant="danger" @click="remove">삭제</b-button>
      <br>
    </div>
    <div class="col-md-5">
      <h1>이미지를 선택하세요.</h1>
      <preview-image />
      <b-form-select v-model="selected" 
                   :options="options"
                   class="mb-3"/>
      <p v-show="selected == '2017'">2017 버전은 현재 베타로 제공되는 서비스로, 못생길 수 있습니다. 혹시 이걸 더 예쁘게 만들어주실 분은 GitHub에 방문해주세요.</p>
    </div>
  </div>
</template>

<script>
let data = {
  // Color Pick Preset
  color2014: ['#8899A6', '#1DA1F2', '#794BC4', '#E0245E', '#F45D22', '#FFAD1F', '#17BF63'],
  color2010: ['#8899A6', '#AAD3E6', '#3B94D9', '#744EAA', '#7F3485', '#992B41', '#BE1931', '#E95F28', '#F6A43D', '#FFAC33', '#AFE356', '#4A913C', '#348569', '346A85'],
  color2009: ['#B6D6E8', '#346A85', '#7F3485', '#8D2B41', '#EDA43D', '#AFE356', '#348569'],

  // Select
  options: [{text: '2017 Custom', value: '2017'}, '2014', '2010', '2009'],

  // File
  file: undefined
}

import Color from './Color'
import ColorRow from './ColorRow'
import PreviewImage from './PreviewImage'

import { mapState, mapGetters } from 'vuex'
export default {
  name: 'configure',
  components: { Color, ColorRow, PreviewImage },
  methods: {
    onChange (val) {
      this.$store.state.color = val.hex
      this.$store.commit()
    },
    blobToDataURL (blob) {
      let self = this
      var a = new FileReader()
      a.onload = e => {
        console.log(e.target.result)
        self.$store.state.image = e.target.result
        self.$store.commit()
      }
      a.readAsDataURL(blob)
    },
    remove () {
      this.file = undefined
      this.$store.state.image = null
      this.$store.commit()
    }
  },
  computed: {
    selected: {
      get () {
        return this.$store.state.year
      },
      set (value) {
        this.$store.commit('updateYear', value)
      }
    },
    ...mapState({
      colorHex: 'color'
    }),
    ...mapGetters(['colorPickerObject'])
  },
  data: _ => data
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-color__chrome {
  clear: left;
}
.clear {
  clear: left;
}
</style>
