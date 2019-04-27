import Vue from 'vue';
import './plugins/router';
import './plugins/vuex';

// @ts-ignore
import App from './views/app/app.vue';

Vue.config.productionTip = false;

import { router } from './router';
import { store } from './store';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
