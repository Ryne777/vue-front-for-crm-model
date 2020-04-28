import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../views/Main.vue")
  },
  {
    path: "/account/:url",
    name: "account-detail",
    meta: { layout: "main" },
    component: () => import("../views/AccountDetail.vue")
  },
  {
    path: "/login/",
    name: "Login",
    meta: { layout: "main" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register/",
    name: "login",
    meta: { layout: "main" },
    component: () => import("../views/Register.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
