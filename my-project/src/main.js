import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Departments from './components/Departments.vue'
import EgyptianArt from './components/EgyptianArt.vue'

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
  ]
})

app.use(router)
app.mount('#app')
