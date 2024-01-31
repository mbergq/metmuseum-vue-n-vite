import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Departments from './components/Departments.vue'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: Departments,
      path: '/Home',
    },
  ]
})

app.use(router)
app.mount('#app')
