import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import CoffeeHeader from './components/CoffeeHeader.vue'

import './style.css'
import App from './App.vue'
import router from './router'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

// แก้ไขบรรทัดนี้: ลบวงเล็บ () ออกแล้ว
app.use(pinia) 

app.use(CkeditorPlugin)

app.use(router)

app.component('coffee-header', CoffeeHeader)
app.mount('#app')