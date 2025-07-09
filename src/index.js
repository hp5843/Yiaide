import { createApp } from 'vue';
import Vant from 'vant';
import App from './App.vue';
import 'vant/lib/index.css';
import './index.css';
import router from './router';

const app = createApp(App);

// 全局注册 Vant
app.use(Vant);
app.use(router);
app.mount('#root');