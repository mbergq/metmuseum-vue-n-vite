<script>
const urlPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='

import axios from 'axios'

export default {

  data() {
    return {
      data: null,
      keyWord: null,
      text: null,
    }
  },
  //Use watch on the input field to update this.keyWord
  //Use onClick to call the function which then uses the url + keyWord value to gather data
  methods: {

    async fetchData() {
      const { data } = await axios.get(urlPath + this.keyWord)
      console.log(data)

      this.data = data
      // console.log(data.objectIDs[this.index])

      // try {
      //   const { data: info } = await axios.get(uniqueUrl + data.objectIDs[this.index])
      //   this.data = info
      //   console.log(this.data.primaryImageSmall)
      // } catch (error) {
      //   console.error("Error:", error)
      // }

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
  <p>{{ this.data }}</p>
</template>
