import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Router from "./router/index";
import Store from './store';

const app = createApp(App);

// app.use(Router); // 注册路由
// app.use(Store); // 注册pinia

app.use(Router).use(Store).mount('#app');
