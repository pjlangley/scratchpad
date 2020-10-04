import Home from './Home/Home.vue';
import Search from './Search/Search.vue';
import NotFound from './App/NotFound.vue';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  }
];
