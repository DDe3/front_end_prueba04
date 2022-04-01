import { createRouter, createWebHashHistory } from 'vue-router'
import Producto from '../views/Producto'

const routes = [
  {
    path: '/',
    name: 'Producto',
    component: Producto
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "venta" */ '../views/Ventas.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
