<template>
  <div id="app">
    <b-jumbotron header="MEGA"
                 lead="MAKE EGGS GREAT AGAIN in Vue.js" >
    </b-jumbotron>
    <div class="container">
      <div class="row">
        <configure class="col-md-8"></configure>
        <result class="col-md-4"></result>
      </div>
    </div>
  </div>
</template>

<script>
import Configure from './components/Configure'
import Result from './components/Result'

let data = {}
export default {
  name: 'app',
  components: {
    Configure, Result
  },
  data: _ => data
}
</script>

<style>
</style>
