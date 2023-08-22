<template>
  <the-header @sign-out="signOutUser"></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { provide, ref, onMounted } from "vue";
import db, { auth } from "@/firebase/init.js";
import { collection, getDocs } from "firebase/firestore";
import TheHeader from "@/components/UI/TheHeader.vue";
import router from "@/router/router";
import store from "@/store/store";
import TheFooter from "@/components/UI/TheFooter.vue";

export default {
  components: { TheFooter, TheHeader },
  setup() {
    const loggedIn = ref(false);
    const userQuestions = ref([]);
    const userLabels = ref([]);
    const publicQuestions = ref([]);

    provide("userQuestions", userQuestions);
    provide("userLabels", userLabels);
    provide("publicQuestions", publicQuestions);

    const signOutUser = () => {
      signOut(auth);
      router.push("/");
    };

    const fetchUserData = async (user) => {
      try {
        // Labels abrufen
        const labelsCollectionRef = collection(db, `users/${user.uid}/labels`);
        const labelsQuerySnapshot = await getDocs(labelsCollectionRef);
        userLabels.value = labelsQuerySnapshot.docs.map((doc) => doc.data());

        // Fragen abrufen
        const questionsCollectionRef = collection(
          db,
          `users/${user.uid}/questions`
        );
        const questionsQuerySnapshot = await getDocs(questionsCollectionRef);
        userQuestions.value = questionsQuerySnapshot.docs.map((doc) => {
          const questionData = doc.data();
          return {
            id: doc.id,
            questionText: questionData.questionText,
            answerOptions: questionData.answerOptions,
            questionLabels: questionData.questionLabels || [],
          };
        });
      } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerdaten:", error.message);
      }
    };

    onMounted(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          loggedIn.value = true;
          store.commit("setLoggedIn", true);
          await fetchUserData(user);
        } else {
          loggedIn.value = false;
          // Navigieren Sie den Benutzer zur Startseite, wenn nicht angemeldet
        }
      });
    });

    return {
      loggedIn,
      signOutUser,
    };
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
