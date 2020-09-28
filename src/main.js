import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入bootstrap框架
import $ from 'jquery'
import '@/assets/bootstrap-3.3.7-dist/css/bootstrap.css'

createApp(App).use(store).use(router).mount('#app')
