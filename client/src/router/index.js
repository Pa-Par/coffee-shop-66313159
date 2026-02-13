import { createRouter, createWebHistory } from 'vue-router'
import { useAuthenStore } from '../stores/authen'

import CoffeesIndex from '../components/Coffees/Index.vue'
import CoffeesShow from '../components/Coffees/ShowCoffee.vue'
import CoffeesCreate from '../components/Coffees/CreateCoffee.vue'
import CoffeesEdit from '../components/Coffees/EditCoffee.vue'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coffees'
    },
    {
      path: '/coffees',
      name: 'coffees',
      component: CoffeesIndex
    },
    {
      path: '/coffee/create',
      name: 'coffee-create',
      component: CoffeesCreate,
      meta: { requiresAdmin: true }
    },
    {
      path: '/coffee/edit/:coffeeId',
      name: 'coffee-edit',
      component: CoffeesEdit
    },
    {
      path: '/coffee/:coffeeId',
      name: 'coffee-show',
      component: CoffeesShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/orders',
      name: 'orders',
      component: { template: '<div>Orders Page</div>' }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const store = useAuthenStore()

  if (to.meta.requiresAdmin && store.user?.type !== 'admin') {
    alert('เฉพาะผู้ดูแลร้านเท่านั้นที่สามารถเข้าถึงได้')
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
