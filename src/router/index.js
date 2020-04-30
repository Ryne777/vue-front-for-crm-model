import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main", auth: true },
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
  {
    path: "/newAccount/",
    name: "newAccount",
    meta: { layout: "main", auth: true },
    component: () => import("../views/NewAcc.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn) {
      next()
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
