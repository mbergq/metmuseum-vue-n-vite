<script>
const urlPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='
const uniqueUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
import axios from 'axios'

export default {

  data() {
    return {
      data: null,
      keyWord: null,
      text: null,
    }
  },

  methods: {

    async fetchData() {
      const { data } = await axios.get(urlPath + this.keyWord)
      console.log(data)
      const userSearchPath = urlPath + this.keyWord
      console.log(userSearchPath)
      let objectID = data.objectIDs[0]

      try {
        const { data: info } = await axios.get(uniqueUrl + objectID)
        this.data = info
      } catch (error) {
        console.error("Error:", error)
      }

    },

    log: function () {
      console.log(this.text)
    },
    onClick: function () {
      this.fetchData()
    }
    // next: function () {
    //   this.index++
    //   this.fetchData()
    // },
    // previous: function () {
    //   this.index--
    //   this.fetchData()
    // }

  }

}

</script>

<template>
  <input type="text" v-model="keyWord" value="Keyword..">
  <input type="button" v-on:click="onClick" value="Search">

  <div v-if="this.data === null">
    <p>Loading...</p>
  </div>

  <div v-else>
    <img :src="this.data.primaryImageSmall" alt="Art">
  </div>

  <!-- <p>{{ this.data }}</p> -->
</template>
