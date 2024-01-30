<script>
import CitiesList from './components/CitiesList.vue'
import HelloWorld from './components/HelloWorld.vue'
import Departments from './components/Departments.vue'

export default {
  components: {
    CitiesList,
    HelloWorld,
    Departments
  }
}
</script>

<template>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <Departments />
</template>
