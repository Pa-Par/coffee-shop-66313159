import { createRouter, createWebHistory } from 'vue-router'
import { useAuthenStore } from '../stores/authen'

import CoffeesIndex from '../components/Coffees/Index.vue'
import CoffeesShow from '../components/Coffees/ShowCoffee.vue'
import CoffeesCreate from '../components/Coffees/CreateCoffee.vue'
import CoffeesEdit from '../components/Coffees/EditCoffee.vue'
import Login from '../components/Login.vue'

import BlogIndex from '../components/Blogs/Index.vue'
import BlogCreate from '../components/Blogs/CreateBlog.vue'
import BlogEdit from '../components/Blogs/EditBlog.vue'
import BlogShow from '../components/Blogs/ShowBlog.vue'

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
    // blogs
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blogs-create', // แก้ไขชื่อให้สื่อความหมาย
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
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

  // ตรวจสอบว่าถ้าหน้านั้นต้องการ Admin แต่ผู้ใช้ไม่ใช่ Admin
  if (to.meta.requiresAdmin && store.user?.type !== 'admin') {
    alert('เฉพาะผู้ดูแลร้านเท่านั้นที่สามารถเข้าถึงได้')
    next({ name: 'login' }) // ส่งกลับไปหน้า login
  } else {
    next() // ให้ไปต่อได้ตามปกติ
  }
})

export default router
