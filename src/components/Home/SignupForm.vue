<template>
  <div>
    <h1>Registrierung</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="email">E-Mail:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">Passwort:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div>
        <label>Uni:</label>
        <input v-model="uni" required />
      </div>
      <button class="my-global-button" type="submit">Registrieren</button>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "@/firebase/init";
import { doc, setDoc, addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
export default {
  data() {
    return {
      email: "",
      password: "",
      uni: "",
    };
  },
  methods: {
    registerUser() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (credential) => {
          console.log(credential.user);

          // Erstellen Sie eine eigene Sammlung für das Team (Nutzer) in Firestore
          const userDocRef = doc(db, `teams/${credential.user.uid}`);

// Definieren Sie den Uni-Namen (als String)
          const uniName = this.uni; // Hier wird der Uni-Name als String gespeichert

// Aktualisieren Sie das Dokument des Benutzers, um das Uni-Feld hinzuzufügen oder zu aktualisieren
          await setDoc(userDocRef, { uni: uniName }, { merge: true });

          console.log("Uni-Name in Firestore gespeichert");

          // Erstellen Sie auch die Sammlungen für Fragen und Labels, wenn benötigt

          console.log("Team (Nutzer) registriert, Daten in Firestore gespeichert");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    registerUser2() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (credential) => {
          console.log(credential.user);

          // Erstelle eine eigene Sammlung für den Nutzer in Firestore für Fragen
          const userQuestionsCollectionRef = collection(
            db,
            `users/${credential.user.uid}/questions`
          );

          // Beispielhaft Frage für den Nutzer speichern
          const questionDocRef = doc(userQuestionsCollectionRef);
          const questionData = {
            questionText: "What is your favorite color?",
            answerOptions: [
              { text: "Red", isCorrect: true },
              { text: "Blue", isCorrect: false },
              { text: "Green", isCorrect: false },
              { text: "Yellow", isCorrect: false },
            ],
          };
          await setDoc(questionDocRef, questionData);

          // Erstelle eine eigene Sammlung für den Nutzer in Firestore für Labels
          const userLabelsCollectionRef = collection(
            db,
            `users/${credential.user.uid}/labels`
          );

          // Beispielhaft data für den Nutzer speichern
          const labelDocRef = doc(userLabelsCollectionRef);
          const labelData = {
            label: "facts",
          };
          await setDoc(labelDocRef, labelData);

          console.log(
            "User registered, personal collections for questions and labels created, and question added"
          );

          // Setze die loggedIn-Variable im Root-Element auf true
          this.$root.loggedIn = true;

          // Navigiere den Nutzer zur Home-Seite
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
form {
  max-width: 400px;
  margin: 0 auto;
}
label {
  display: block;
  margin-bottom: 10px;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
