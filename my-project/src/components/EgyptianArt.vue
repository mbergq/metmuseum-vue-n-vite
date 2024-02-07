<script>
const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=egypt'
const uniqueUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

import axios from 'axios'
import EgyptianArtData from './EgyptianArtData.vue'

export default {

  components: { EgyptianArtData },

  created() {
    this.fetchData()
    // console.log(this.data)
  },

  data() {
    return {
      data: null,
      image: null,
      index: 0,
      o: {
        data: null,
        name: null,
        year: null,
        department: null
      }
    }
  },
  emits: ['emit-data'],
  methods: {

    async fetchData() {
      const { data } = await axios.get(url)

      console.log(data.objectIDs[this.index])

      try {
        const { data: info } = await axios.get(uniqueUrl + data.objectIDs[this.index])
        this.data = info
        // console.log(this.data.accessionYear)
        this.o.year = this.data.accessionYear
        console.log(this.data.primaryImageSmall)
      } catch (error) {
        console.error("Error:", error)
      }

    },

    onClick() {
      this.fetchData()
      console.log(this.o.name)
      this.$emit('emit-data', this.o)
    },
    next() {
      this.index++
      this.fetchData()
      this.$emit('emit-data', this.o)
    },
    previous() {
      this.index--
      this.fetchData()
      this.$emit('emit-data', this.o)
    },
    onEmitData(o) {
      this.o.year = o.year
    }

  }
}
</script>


<template>
  <input type="button" v-on:click="onClick" value="Go">
  <input type="button" v-on:click="previous" value="Previous">
  <input type="button" v-on:click="next" value="Next">

  <div v-if="this.data === null">
    <p>Loading..</p>
  </div>

  <div v-else>
    <img :src="this.data.primaryImageSmall" alt="Art">
  </div>

  <EgyptianArtData @emit-data="onEmitData" :year="o.year"></EgyptianArtData>
</template>
