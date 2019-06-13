<template>
  <div class="indexMargin">
    <h1>This is the Front Page.</h1>
    <h3>The chosen one is called {{ chosenOne }}</h3>
    <nuxt-link to="/serverless">
      serverless
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    theName() {
      return this.name || 'anon'
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get('https://swapi.co/api/people/1/')
    return { chosenOne: data.name }
  },
  head: {
    link: [
      {
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css'
      }
    ]
  }
}
</script>

<style scoped>
  .indexMargin {
    margin: 15px
  }
</style>
