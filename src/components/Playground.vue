<template>
  <v-flex xs6>
    <v-card>
      <v-card-title class="title blue white--text">Card 1</v-card-title>
      <v-card-text>Content</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
