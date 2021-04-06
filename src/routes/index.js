import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/index';
import Drink from '../pages/Drink/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/drink/:id',
    name: 'drink',
    component: Drink
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
