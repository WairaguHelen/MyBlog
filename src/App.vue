<style>
.container{
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  display: block;
  height: 50px;
  margin: 20px auto;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <router-view/>
    <div class="row">
      <div class="col-sm-12">
      <paginate
        name="blogs"
        :list="posts"
        :per="10"
        tag="div"
      >
      <section v-for="blog in paginated('blogs')" :key="blog.id">
        <h2>{{ blog.title }}</h2>
        <router-link :to="'/post/' + blog.id" class="btn btn-primary">read more</router-link>
        <hr>
      </section>
      </paginate>

      <paginate-links
        for="blogs"
        :async="true"
        :show-step-links="true"
        :step-links="{
          next: 'Next',
          prev: 'Previous'
        }"
        :classes="{
          'ul': 'pagination',
          'ul > li': 'page-item',
          'ul > li > a': 'page-link',
        }"
      >
      </paginate-links>
      </div>
     <footer class="col-sm-12">
       <hr>
       <p class="text-center">&copy; 2018 </p>
     </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      posts: [],
      paginate: ['blogs']
    }
  },

  created() {
    this.$http.get("http://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(json => this.posts = json, error => console.log(error));
  }
}
</script>