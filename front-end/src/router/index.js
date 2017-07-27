/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import Err404 from '@/views/404';
import Layout from '@/views/layout/layout';
import dashboard from '@/views/dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/login', component: Login, hidden: true },
    { path: '/404', component: Err404, hidden: true },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'Home',
      hidden: true,
      children: [{ path: 'dashboard', component: dashboard }]
    }
  ]
});
