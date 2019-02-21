<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  max-width: 600px;
  margin: 0 auto;
}
</style>

<template>
  <div class="container">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      msg: 'These are the posts'
    }
  }
}
</script>
