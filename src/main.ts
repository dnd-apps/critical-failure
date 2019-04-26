import Vue from "vue";

import App from "./views/app/app.vue";

import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

import { store } from "./store";
import { router } from "./router";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
