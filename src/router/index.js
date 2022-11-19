import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "game",
    component: () => import("../views/GameView/GameView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView/AboutView.vue"),
  },
  {
    path: "/credits",
    name: "credits",
    component: () => import("../views/CreditsView/CreditsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
