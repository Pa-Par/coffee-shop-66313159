import { createRouter, createWebHistory } from 'vue-router'

// ----- Import Components -----
import MenuIndex from '../components/Coffees/Index.vue'
import MenuShow from '../components/Coffees/ShowMenu.vue'
import MenuCreate from '../components/Coffees/CreateCoffee.vue'
import MenuEdit from '../components/Coffees/EditCoffee.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/menus',
      name: 'menus',
      component: MenuIndex
    },
    {
      path: '/coffee/create',
      name: 'menu-create',
      component: MenuCreate
    },
    {
      path: '/coffee/edit/:coffeeId',
      name: 'menu-edit',
      component: MenuEdit
    },
    {
      path: '/menu/:menuId',
      name: 'menu-show',
      component: MenuShow
    }
  ]
})

export default router
