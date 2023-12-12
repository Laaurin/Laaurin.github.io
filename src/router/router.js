import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import { getUserState } from "../firebase/init";
import store from "@/store/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: false, title: "mootcoach | Start" },
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("../views/UploadView.vue"),
    meta: { requiresAuth: true, title: "mootcoach | Upload" },
  },
  {
    path: "/practice",
    name: "practice",
    component: () => import("../views/PracticeView.vue"),
    meta: {
      requiresAuth: true,
      title: "mootcoach | Practice",
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
    meta: { requiresAuth: false, title: "mootcoach | Practice" },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
    meta: { requiresAuth: true, requiresUser: false, title: "mootcoach | Profile" },
  },
  {
    path: "/impressum",
    name: "impressum",
    component: () => import("../views/ImpressumView.vue"),
    meta: { requiresAuth: false, title: "mootcoach | Impressum" },
  },
  {
    path: "/educate",
    name: "educate",
    component: () => import("../views/EducationView.vue"),
    meta: {requiresAuth: true, title: "mootcoach | Educate"}
  },
  {
    path: "/datenschutz",
    name: "datenschutz",
    component: () => import("../views/DatenschutzView.vue"),
    meta: { requiresAuth: true, title: "mootcoach | Datenschutz" },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),

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
  if (to.meta.requiresAuth && to.meta.requiresUser && store.getters.isAuthenticated && store.getters.userProfileName === null) {
    console.log(store.getters.userProfileName);
    console.log("doch cdohcd");
    next("/")
  }
  else if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    console.log("das passt schon")
    next("/");
  } else {
    next();
  }
});

export default router;
