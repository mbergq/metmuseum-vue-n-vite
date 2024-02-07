<script>
const urlPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='
const uniqueUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/
import axios from 'axios'

export default {
  data() {
    return {
      data: null,
      keyWord: null,
      text: null,
      numberOfObjects: null,
      warningMessage: null,
      showMessage: false,
      index: 0,
    }
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(urlPath + this.keyWord);

      this.numberOfObjects = data.objectIDs.length
      let objectID = data.objectIDs[this.index];
      try {
        const { data: info } = await axios.get(uniqueUrl + objectID);
        this.data = info;
      }
      catch (error) {
        console.error("Error:", error);
      }
    },

    onClick() {
      this.fetchData()
      this.showMessage = true
    },
    next() {
      this.index++
      this.fetchData()
    },
    previous() {
      this.index--
      this.fetchData()
    },
    random() {
      this.index = Math.floor(Math.random() * this.numberOfObjects)
      this.fetchData()
    },

  },
  watch: {
    keyWord() {
      //Hide the searchmessage and display warningmessage if the keyword
      //contains special characters
      this.showMessage = false

      this.$nextTick(() => {
        if (regex.test(this.keyWord)) {
          this.warningMessage =
            `Your keyword contains special characters, consider removing them
        before searching..`
        } else {
          this.warningMessage = null
        }
      })

    },

  },
  computed: {
    message() {
      return "You've searched for " + this.keyWord + ", there are " + this.numberOfObjects +
        " objects to look at on this query"
    }
  },
}

</script>

<template>
  <input type="text" v-model="keyWord" value="Keyword..">
  <input type="button" v-on:click="onClick" value="Search">
  <input type="button" @click="previous" value="Previous">
  <input type="button" @click="next" value="Next">
  <input type="button" @click="random" value="Random">
  <!-- Handle the error below better -->
  <p>{{ this.warningMessage }}</p>

  <div v-if="this.data === null">

  </div>

  <div v-else>
    <img :src="this.data.primaryImageSmall" alt="Art">
  </div>

  <p v-show="showMessage">{{ message }}</p>

  <!-- <SearchLog @send-log="onSendLog" :key-word="keyWord" :number-of-possible-ids="numberOfObjects"></SearchLog> -->
</template>
