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
      //Explanation: This path needs to be used in order to render this components data
      //So a router link needs to use to="/'name'" to render this component
      path: '/',
      component: Home,

      path: '/departments',
      component: Departments,
    },
  ]
})

app.use(router)
app.mount('#app')
