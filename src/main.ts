import Vue from 'vue';

import App from './views/app/app.vue';

import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

import { router } from './router';

new Vue({
  router,

  render: h => h(App)
}).$mount('#app');
