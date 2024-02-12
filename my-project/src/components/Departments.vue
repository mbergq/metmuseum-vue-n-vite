<script>
const departments = 'https://collectionapi.metmuseum.org/public/collection/v1/departments'

import axios from "axios"
export default {

  created() {
    this.fetchData();
  },

  data() {
    return {
      data: null,
    }
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(departments);
      this.data = data.departments
      // this.data = data.departments[0].displayName
    }
  }
}
</script>


<template>
  <p v-for="name in data">{{ name.displayName }}</p>
</template>
