import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Departments from './components/Departments.vue'
import EgyptianArt from './components/EgyptianArt.vue'
import UserSearch from './components/UserSearch.vue'
import Animal from './components/Animal.vue'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/departments',
      component: Departments,
    },
    {
      path: '/egyptianart',
      component: EgyptianArt,
    },
    {
      path: '/usersearch',
      component: UserSearch,
    },
    {
      path: '/animal/:id',
      component: Animal,
    },
  ]
})

app.use(router)
app.mount('#app')
