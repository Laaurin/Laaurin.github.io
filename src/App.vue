<template>
  <the-header class="sticky-top"></the-header>
  <base-top></base-top>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { onMounted } from "vue";
import { useStore } from "vuex";
import BaseTop from "@/components/UI/BaseTop.vue";
import TheHeader from "@/components/UI/TheHeader.vue";
import { auth } from "@/firebase/init";
import { useRouter } from "vue-router";
import TheFooter from "@/components/UI/TheFooter.vue";
//import TheFooter from "@/components/UI/TheFooter.vue";

export default {
  components: { TheFooter, TheHeader, BaseTop },
  setup() {
    const store = useStore();
    const router = useRouter();
    store.dispatch("tryLogin");
    onMounted(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          store.commit("setLoggedIn", true);
          await store.dispatch("fetchUserData", user);
        } else {
          store.commit("setLoggedIn", false);
          await router.push("/");
          // Navigieren Sie den Benutzer zur Startseite, wenn nicht angemeldet
        }
      });
    });
  },
};
</script>

<style>
@import "@/assets/styles.css";

body {
  font-family: "Roboto", sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
