import Vue from 'vue';
import Vuex from 'vuex';
import App from './views/app/app.vue';
import { store } from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
