<script>
import Home from './components/Home.vue'
import CitiesList from './components/CitiesList.vue'
import HelloWorld from './components/HelloWorld.vue'
import Departments from './components/Departments.vue'
import EgyptianArt from './components/EgyptianArt.vue'
import UserSearch from './components/UserSearch.vue'
import SearchLog from './components/SearchLog.vue'

export default {
  components: {
    CitiesList,
    HelloWorld,
    Departments,
    EgyptianArt,
    UserSearch,
    Home
  }
}
</script>

<template>
  <router-view></router-view>
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
