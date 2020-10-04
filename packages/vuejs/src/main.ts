import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App/App.vue';
import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
