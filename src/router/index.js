import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/login/Login.vue";
import Main from "../views/main/Main.vue";
import Form from "../views/form/Form.vue";
import Obrigado from "../views/obrigado/Obrigado.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/obrigado",
    name: "Obrigado",
    component: Obrigado,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
