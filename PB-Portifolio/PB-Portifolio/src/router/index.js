import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: AboutView,
    meta: { title: 'Sobre' },
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContactView,
    meta: { title: 'Contato' },
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Meu Portfólio'
  next()
})

export default router