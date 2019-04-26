import Classy from "./views/classy/classy.vue";

export const routes = [
  { path: "/welcome", component: Classy, name: "welcome" },
  { path: "/", redirect: { name: "welcome" } }
];
