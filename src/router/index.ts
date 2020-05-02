import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("@/views/Editor.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue")
  },
  {
    path: "/@:username",
    name: "Profile",
    component: () => import("@/views/Profile.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
