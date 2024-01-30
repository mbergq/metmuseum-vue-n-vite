<script>
const arrayOfIds = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/841283'

import axios from "axios"
export default {

  created() {
    this.fetchData();
  },

  data() {
    return {
      data: null,
      img: null,
    }
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(arrayOfIds);
      this.data = data
      this.img = data.primaryImageSmall
    }
  }
}
</script>


<template>
  <img :src="this.img" alt="">
</template>
