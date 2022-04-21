import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/CreateStudentView.vue"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../views/ListOfStudentsView.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../views/EditStudentView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
