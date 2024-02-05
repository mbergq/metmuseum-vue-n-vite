<script>
const urlPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='
const uniqueUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/
import axios from 'axios'
import SearchLog from './SearchLog.vue'

export default {
  data() {
    return {
      data: null,
      keyWord: null,
      text: null,
      numberOfPossibleIds: null,
      warningMessage: null,
      showMessage: false,
    }
  },
  emits: ['send-log'],
  methods: {
    async fetchData() {
      const { data } = await axios.get(urlPath + this.keyWord);

      this.numberOfPossibleIds = data.objectIDs.length
      let objectID = data.objectIDs[0];
      try {
        const { data: info } = await axios.get(uniqueUrl + objectID);
        this.data = info;
      }
      catch (error) {
        console.error("Error:", error);
      }
    },
    onClick: function () {
      this.fetchData()
      this.emitSendLog()
      this.showMessage = true
    },
    emitSendLog() {
      this.$emit('send-log', this.keyWord, this.numberOfPossibleIds)
    },
    onSendLog() {
      this.keyWord = keyWord
      this.numberOfPossibleIds = numberOfPossibleIds
      //This function is not running atm
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
      return "You've searched for " + this.keyWord + ", there are " + this.numberOfPossibleIds +
        " objects to look at on this query"
    }
  },
  components: { SearchLog }
}

</script>

<template>
  <router-link to="/">Home</router-link>

  <input type="text" v-model="keyWord" value="Keyword..">
  <input type="button" v-on:click="onClick" value="Search">
  <!-- Handle the error below better -->
  <p>{{ this.warningMessage }}</p>

  <div v-if="this.data === null">

  </div>

  <div v-else>
    <img :src="this.data.primaryImageSmall" alt="Art">
  </div>


  <p v-show="showMessage">{{ message }}</p>

  <SearchLog @send-log="onSendLog" :key-word="keyWord" :number-of-possible-ids="numberOfPossibleIds"></SearchLog>
</template>
