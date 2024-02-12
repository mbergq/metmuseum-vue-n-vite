import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Departments from './views/Departments.vue'
import EgyptianArt from './views/EgyptianArt.vue'
import UserSearch from './views/UserSearch.vue'
import Animal from './views/Animal.vue'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
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
