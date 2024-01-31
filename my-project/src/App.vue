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
  <!-- <HelloWorld msg="Hello World!" />
  <CitiesList /> -->

  <div id="flexBox">
    <Departments />
  </div>
</template>

<style>
body {
  background-color: rgb(112, 127, 143);
}

#flexBox {
  display: flex;
  flex-direction: column;
}

#flexBox>a {
  max-width: fit-content;
}
</style>
