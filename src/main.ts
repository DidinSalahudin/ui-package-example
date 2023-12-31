import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routers'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App).use(router).mount('#app')
