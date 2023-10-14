import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import { getUserState } from "../firebase/init";
import store from "@/store/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: false, title: "Vis Quiz | Start" },
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("../views/UploadView.vue"),
    meta: { requiresAuth: true, title: "Vis Quiz | Upload" },
  },
  {
    path: "/practice",
    name: "practice",
    component: () => import("../views/PracticeView.vue"),
    meta: {
      requiresAuth: true,
      requiresUser: true,
      title: "Vis Quiz | Practice",
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
    meta: { requiresAuth: false, title: "Vis Quiz | Sign Up" },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
    meta: { requiresAuth: true, title: "Vis Quiz | Profile" },
  },
  {
    path: "/impressum",
    name: "impressum",
    component: () => import("../views/ImpressumView.vue"),
    meta: { requiresAuth: false, title: "Vis Quiz | Impressum" },
  },
  {
    path: "/sponsors",
    name: "sponsors",
    component: () => import("../views/SponsorView.vue"),
    meta: { requiresAuth: false, title: "Vis Quiz | Sponsors" },
  },
  {
    path: "/review",
    name: "review",
    component: () => import("../views/ReviewView.vue"),
    meta: { requiresAuth: true, title: "Vis Quiz | Review" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta?.title ?? "Vis Quiz";
  //const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  //const isAuth = await getUserState();
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
