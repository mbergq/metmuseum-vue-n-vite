<script>
const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=egypt'
const uniqueUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


import axios from "axios"
export default {

  created() {
    this.fetchData()
    console.log(this.data)
  },

  data() {
    return {
      data: null,
      image: null,
      index: 0,
    }
  },
  methods: {

    async fetchData() {
      const { data } = await axios.get(url)

      console.log(data.objectIDs[this.index])

      try {
        const { data: info } = await axios.get(uniqueUrl + data.objectIDs[this.index])
        this.data = info
        console.log(this.data.primaryImageSmall)
      } catch (error) {
        console.error("Error:", error)
      }

    },

    onClick: function () {
      this.fetchData()
    },
    next: function () {
      this.index++
      this.fetchData()
    },
    previous: function () {
      this.index--
      this.fetchData()
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

  <p>{{ }}</p>
</template>
