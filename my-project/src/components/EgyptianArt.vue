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
      numberOfObjects: null,
      o: {
        data: null,
        name: null,
        year: null,
        department: null,
        medium: null,
      }
    }
  },
  emits: ['emit-data'],
  methods: {

    async fetchData() {
      const { data } = await axios.get(url)

      this.numberOfObjects = data.objectIDs.length

      try {
        const { data: info } = await axios.get(uniqueUrl + data.objectIDs[this.index])
        this.data = info
        this.o.year = this.data.accessionYear
        this.o.department = this.data.department
        this.o.medium = this.data.medium
        console.log(this.data)

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
    random() {
      this.index = Math.floor(Math.random() * this.numberOfObjects)
      this.fetchData()
      this.$emit('emit-data', this.o)
    },
    onEmitData(o) {
      this.o.year = o.year
      this.o.department = o.department
      this.o.medium = o.medium
    }

  }
}
</script>


<template>
  <input type="button" @click="onClick" value="Go">
  <input type="button" @click="previous" value="Previous">
  <input type="button" @click="next" value="Next">
  <input type="button" @click="random" value="Random">

  <div v-if="this.data === null">
    <p>Loading..</p>
  </div>

  <div v-else>
    <img :src="this.data.primaryImageSmall" alt="Art">
  </div>

  <EgyptianArtData @emit-data="onEmitData" :year="o.year" :department="o.department" :medium="o.medium"></EgyptianArtData>
</template>
