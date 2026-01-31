import { createRouter, createWebHistory } from 'vue-router'

// ----- Import Components -----
import MenuIndex from '@/components/Menus/Index.vue'
import MenuShow from '@/components/Menus/ShowMenu.vue'
import MenuCreate from '@/components/Menus/CreateMenu.vue'
import MenuEdit from '@/components/Menus/EditMenu.vue'

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
