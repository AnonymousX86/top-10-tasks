import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import StepOne from "../views/StepOne.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Step 1",
    component: StepOne,
  },
  {
    path: "/step-2",
    name: "Step 2",
    component: () =>
      import(/* webpackChunkName: "Step 2" */ "../views/StepTwo.vue"),
  },
  {
    path: "/step-3",
    name: "Step 3",
    component: () =>
      import(/* webpackChunkName: "Step 3" */ "../views/StepThree.vue"),
  },
  {
    path: "/step-4",
    name: "Step 4",
    component: () =>
      import(/* webpackChunkName: "Step 4" */ "../views/StepFour.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
