// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import NProgress from 'nprogress';
import 'element-ui/lib/theme-default/index.css';
import store from './store';
import IconSvg from '@/components/Icon-svg/index';
import '@/assets/iconfont/iconfont';
import { getToken } from '@/utils/auth';

Vue.config.productionTip = false;

Vue.component('icon-svg', IconSvg);
Vue.use(ElementUI);
Vue.use(NProgress);

const whiteList = ['/login'];
router.beforeEach(
  (to, from, next) => {
    NProgress.start();
    if (getToken()) {
      if (to.path === '/login') {
        next({ path: '/' });
      } else {
        // 得到角色信息来生成对应的路由
        next();
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next('/login');
      }
      NProgress.done();
    }
  }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
