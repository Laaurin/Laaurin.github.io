// store.js
import { createStore } from "vuex";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import dataModule from "./modules/data/index";
import authModule from "./modules/auth/index";
import userModule from "./modules/user/index";

export default createStore({
  modules: {
    data: dataModule,
    auth: authModule,
    user: userModule,
  },
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    async signOutUser(context) {
      try {
        await signOut(auth); // Authentifizierung abmelden
        context.commit("setLoggedIn", false); // Zustand im Store aktualisieren
      } catch (error) {
        console.error("Fehler beim Abmelden:", error.message);
      }
    },
  },
});
