import Vue from "vue";
import VueRouter from "vue-router";

import App from "./views/app/app.vue";
import { store } from "./store";
import Hello from "./views/hello/hello.vue";

Vue.config.productionTip = false;

const routes = [{ path: "/hello", component: Hello }];

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
