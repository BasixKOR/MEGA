<template>
  <div id="result">
    <h1>이제 다운로드하시면 됩니다!</h1>
    <button type="button" class="btn btn-primary btn-lg btn-block" @click="download">보러 가기!</button>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import html2canvas from 'html2canvas'

let data = { error: '' }
export default {
  name: 'result',
  data: _ => data,
  computed: {
    ...mapState(['year', 'color'])
  },
  methods: {
    download () {
      html2canvas(document.getElementById('preview'))
        .then(canvas => canvas.toDataURL('image/png'))
        .then(url => this.open(url))
        .catch(err => { this.error = err })
    },
    open (url) {
      window.open(url)
    }
  }
}
</script>
