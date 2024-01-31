import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Departments from './components/Departments.vue'
import EgyptianArt from './components/EgyptianArt.vue'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: Departments,
      path: '/',

      component: EgyptianArt,
      path: '/'
    },
  ]
})

app.use(router)
app.mount('#app')
