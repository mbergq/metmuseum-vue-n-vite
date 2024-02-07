<script>
import Home from './components/Home.vue'
import CitiesList from './components/CitiesList.vue'
import HelloWorld from './components/HelloWorld.vue'
import Departments from './components/Departments.vue'
import EgyptianArt from './components/EgyptianArt.vue'
import UserSearch from './components/UserSearch.vue'
import Animal from './components/Animal.vue'
import EgyptianArtData from './components/EgyptianArtData.vue'

export default {
  components: {
    CitiesList,
    HelloWorld,
    Departments,
    EgyptianArt,
    UserSearch,
    Home,
    Animal,
    EgyptianArtData
  },

}
</script>

<template>
  <h2>Welcome! Use the links below to start using the functions</h2>

  <div id="style">
    <router-link to="/departments">Departments</router-link>
    <router-link to="/egyptianart">Egyptian Art</router-link>
    <router-link to="/usersearch">Search function</router-link>
  </div>

  <div id="style">
    <router-link to="/animal/crocodile">Animal 1</router-link>
    <router-link to="/animal/giraffe">Animal 2</router-link>
    <router-link to="/animal/panther">Animal 3</router-link>
  </div>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
body {
  background-color: rgb(112, 127, 143);
}

#style {
  margin-bottom: 42px;
}

#style>a {
  margin-left: 14px;
  margin-right: 14px;
}
</style>
