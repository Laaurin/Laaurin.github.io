<template>
  <div class="container">
    <h2>Add new question</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="question">question:</label>
        <input type="text" id="question" v-model="question" required />
      </div>
      <div class="mb-3">
        <label for="answer1">option 1:</label>
        <input type="text" id="answer1" v-model="answers[0].text" required />
        <input type="radio" v-model="correctAnswerIndex" :value="0" required />
      </div>
      <div class="mb-3">
        <label for="answer2">option 2:</label>
        <input type="text" id="answer2" v-model="answers[1].text" required />
        <input type="radio" v-model="correctAnswerIndex" :value="1" required />
      </div>
      <div class="mb-3">
        <label for="answer3">option 3:</label>
        <input type="text" id="answer3" v-model="answers[2].text" required />
        <input type="radio" v-model="correctAnswerIndex" :value="2" required />
      </div>
      <div class="mb-3">
        <label for="answer4">option 4:</label>
        <input type="text" id="answer4" v-model="answers[3].text" required />
        <input type="radio" v-model="correctAnswerIndex" :value="3" required />
      </div>
      <button type="submit">add question</button>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import { collection, addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      question: "",
      answers: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      correctAnswerIndex: null,
    };
  },
  methods: {
    async submitForm() {
      // Validieren, ob eine richtige Antwort ausgewählt wurde
      if (this.correctAnswerIndex === null) {
        alert("Bitte wählen Sie eine richtige Antwort aus.");
        return;
      }

      // Hier können Sie die neue Frage an Ihre Datenquelle (z. B. Firebase) senden
      // und sie speichern oder anderweitig verarbeiten.
      await this.createQuestion();
      // Optional: Zurücksetzen der Formularfelder nach dem Hinzufügen der Frage
      this.question = "";
      this.answers.forEach((answer) => (answer.text = ""));
      this.correctAnswerIndex = null;
    },

    async createQuestion() {
      const colRef = collection(db, "questions");
      const dataObj = {
        questionText: this.question,
        answerOptions: this.answers.map((answer, index) => {
          return {
            text: answer.text,
            isCorrect: index === this.correctAnswerIndex,
          };
        }),
      };

      const docRef = await addDoc(colRef, dataObj);
      console.log("erstellt mit folgender id: ", docRef.id);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
}
</style>
