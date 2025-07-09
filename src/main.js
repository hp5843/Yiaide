import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App)
.use(router)
.use(Vant)
.mount('#app')
