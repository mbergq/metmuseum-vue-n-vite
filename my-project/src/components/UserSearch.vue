<script>
const urlPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='
const uniqueUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
import axios from 'axios'
import SearchLog from './SearchLog.vue'

export default {
  data() {
    return {
      data: null,
      keyWord: null,
      text: null,
      numberOfPossibleIds: null,
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
    },
    emitSendLog() {
      this.$emit('send-log', this.keyWord, this.numberOfPossibleIds)
    },
    onSendLog() {
      this.keyWord = keyWord
      this.numberOfPossibleIds = numberOfPossibleIds
      //This function is not running atm
    }
  },
  components: { SearchLog }
}

</script>

<template>
  <router-link to="/">Home</router-link>

  <input type="text" v-model="keyWord" value="Keyword..">
  <input type="button" v-on:click="onClick" value="Search">

  <div v-if="this.data === null">
    <p>Loading...</p>
  </div>

  <div v-else>
    <img :src="this.data.primaryImageSmall" alt="Art">
  </div>

  <SearchLog @send-log="onSendLog" :key-word-log="keyWord" :number-of-possible-ids="numberOfPossibleIds"></SearchLog>
</template>
