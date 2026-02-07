import { createRouter, createWebHistory } from 'vue-router'

// ----- Import Components -----
import CoffeesIndex from '../components/Coffees/Index.vue'
import CoffeesShow from '../components/Coffees/ShowCoffee.vue'
import CoffeesCreate from '../components/Coffees/CreateCoffee.vue'
import CoffeesEdit from '../components/Coffees/EditCoffee.vue'
<<<<<<< HEAD
=======
import Login from '../components/Login.vue'
>>>>>>> 06a9b95ca6b71ce2d2a855aa1ddc3f7a6fb151f1

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
      component: CoffeesCreate
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
<<<<<<< HEAD
=======
    },
    {
      path: '/login',
      name: 'login',
      component: Login
>>>>>>> 06a9b95ca6b71ce2d2a855aa1ddc3f7a6fb151f1
    }
  ]
})

export default router
