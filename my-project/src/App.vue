<script>
import Departments from './views/Departments.vue'
import EgyptianArt from './views/EgyptianArt.vue'
import UserSearch from './views/UserSearch.vue'
import Animal from './views/Animal.vue'
import EgyptianArtData from './components/EgyptianArtData.vue'

export default {
  components: {
    Departments,
    EgyptianArt,
    UserSearch,
    Animal,
    EgyptianArtData
  },

}
</script>

<template>
  <h2>Welcome! Use the links below to start using the functions</h2>

  <div id="style">
    <router-link to="/egyptianart">Egyptian Art</router-link>
    <router-link to="/usersearch">Search function</router-link>
    <router-link to="/departments">Departments</router-link>
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
