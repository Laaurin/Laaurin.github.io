<template>
  <the-header class="sticky-top"></the-header>
  <base-top></base-top>
  <router-view></router-view>
  <the-footer></the-footer>
  <!--smartphone-disclaimer class="d-md-none" v-if="show" @close="show=false"></smartphone-disclaimer-->
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import BaseTop from "@/components/UI/BaseTop.vue";
import TheHeader from "@/components/UI/TheHeader.vue";
import { auth } from "@/firebase/init";
import { useRouter } from "vue-router";
import TheFooter from "@/components/UI/TheFooter.vue";
import SmartphoneDisclaimer from "@/components/SmartphoneDisclaimer.vue";

export default {
  components: { TheFooter, TheHeader, BaseTop, SmartphoneDisclaimer },
  setup() {
    const store = useStore();
    const router = useRouter();
    const show = ref(true);
    store.dispatch("tryLogin");
    onMounted(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          store.commit("setLoggedIn", true);
          await store.dispatch("fetchUserData", user);
          if (store.getters.userProfileId !== null) {
            await store.dispatch("fetchUserStats");
          }
        } else {
          store.commit("setLoggedIn", false);
          await router.push("/");
          // Navigieren Sie den Benutzer zur Startseite, wenn nicht angemeldet
        }
      });
    });
    return {
      show,
    }
  },
};
</script>

<style>
@import "@/assets/styles.css";

body {
  font-family: "Roboto", sans-serif;
}
</style>
