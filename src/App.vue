<template>
  <the-header @sign-out="signOut"></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/init.js";
export default {
  components: { TheHeader },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    signOut() {
      signOut(auth);
    },
  },
  created() {
    // Überwachen Sie den Authentifizierungsstatus des Benutzers
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
        this.$router.push("/");
      }
    });
  },
};
</script>

<style>
@import "@/assets/styles.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
