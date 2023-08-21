import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "@/firebase/init";
import store from "@/store/store";
import { getUserState } from "../firebase/init";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("../views/EditorView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/practice",
    name: "practice",
    component: () => import("../views/PracticeView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  const isAuth = await getUserState();
  console.log(isAuthenticated);
  console.log(store.state.isLoggedIn);
  console.log("ne" + isAuth);
  if (requiresAuth && !isAuth) {
    next("/");
  } else {
    next();
  }
});

export default router;
