import Vue from "vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);
export default new Vuetify({
  theme: { dark: true },
});

// export default ctx => {
//     const vuetify = new Vuetify({
//         theme: { dark: true },
//     })
//     ctx.app.vuetify = vuetify
//     ctx.$vuetify = vuetify.framework
// }
