<template>
  <div class="container">
    <h2>Upload new question</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <div class="question-input-wrapper">
          <input
            type="text"
            id="question"
            v-model="question"
            placeholder="Enter your question here"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="option-input-wrapper">
          <label class="answer-label" for="answer1">Option 1:</label>
          <input type="text" id="answer1" v-model="answers[0].text" required />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="0"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="option-input-wrapper">
          <label class="answer-label" for="answer2">Option 2:</label>
          <input type="text" id="answer2" v-model="answers[1].text" required />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="1"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="option-input-wrapper">
          <label class="answer-label" for="answer3">Option 3:</label>
          <input type="text" id="answer3" v-model="answers[2].text" required />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="2"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <div class="option-input-wrapper">
          <label class="answer-label" for="answer4">Option 4:</label>
          <input type="text" id="answer4" v-model="answers[3].text" required />
          <input
            type="radio"
            v-model="correctAnswerIndex"
            :value="3"
            required
          />
        </div>
      </div>
      <div>
        <label>private Question</label>
        <input type="checkbox" v-model="privateQuestion" />
        <div v-if="privateQuestion">
          <div class="label-list">
            <label
              v-for="(label, index) in availableLabels"
              :key="index"
              class="label-wrapper"
            >
              <label-item
                :label-name="label.labelName"
                :selected-labels="availableLabels"
                @toggle-label="toggleLabel"
              ></label-item>
            </label>
          </div>
        </div>
      </div>
      <button class="my-global-button" type="submit">add question</button>
    </form>
  </div>
</template>

<script>
import db, { auth } from "@/firebase/init.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
import LabelItem from "@/components/LabelItem.vue";
import QuestionLabel from "@/components/QuestionLabel.vue";

export default {
  components: { QuestionLabel, LabelItem },
  data() {
    return {
      question: "",
      answers: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      correctAnswerIndex: null,
      privateQuestion: false,
      availableLabels: [
        {
          labelName: "test",
        },
        {
          labelName: "noch eins",
        },
      ],
      selectedLabels: [],
    };
  },
  methods: {
    async submitForm() {
      // Validieren, ob eine richtige Antwort ausgewählt wurde
      if (this.correctAnswerIndex === null) {
        alert("Bitte wählen Sie eine richtige Antwort aus.");
        return;
      }

      if (this.privateQuestion) {
        const dataObj = this.createPrivateQuestion();
        await this.uploadPrivateQuestion(dataObj);
      } else {
        console.log("erstmal abwarten");
      }
      // Optional: Zurücksetzen der Formularfelder nach dem Hinzufügen der Frage
      this.question = "";
      this.answers.forEach((answer) => (answer.text = ""));
      this.correctAnswerIndex = null;
      this.privateQuestion = false;
      this.selectedLabels = [];
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

      // Überprüfe, ob die Frage als privat markiert ist

      // Erstelle eine eigene Sammlung für den Nutzer in Firestore

      // Füge die Frage zur allgemeinen Sammlung hinzu, wenn sie nicht privat ist
      await addDoc(colRef, dataObj);

      // Zurücksetzen der Formularfelder nach dem Hinzufügen der Frage
      this.question = "";
      this.answers.forEach((answer) => (answer.text = ""));
      this.correctAnswerIndex = null;
      // Setze die ausgewählten Labels zurück
    },

    createPrivateQuestion() {
      console.log(this.selectedLabels);
      return {
        questionText: this.question,
        questionLabels: this.selectedLabels.map((label) => {
          return {
            label: label,
          };
        }),
        answerOptions: this.answers.map((answer, index) => {
          return {
            text: answer.text,
            isCorrect: index === this.correctAnswerIndex,
          };
        }),
      };
    },

    async uploadPrivateQuestion(dataObj) {
      const userCollectionRef = collection(
        db,
        `users/${auth.currentUser.uid}/questions`
      );
      const userDocRef = await addDoc(userCollectionRef, dataObj);
      console.log("Private question created:", userDocRef.id);
    },

    createPublicQuestion() {
      const dataObj = {
        questionText: this.question,
        questionLabels: {},
        answerOptions: this.answers.map((answer, index) => {
          return {
            text: answer.text,
            isCorrect: index === this.correctAnswerIndex,
          };
        }),
      };
      return dataObj;
    },

    async fetchLabels() {
      const user = auth.currentUser;
      const labelsCollectionRef = collection(db, `users/${user.uid}/labels`);

      try {
        const querySnapshot = await getDocs(labelsCollectionRef);
        this.availableLabels = querySnapshot.docs.map((doc) => doc.data());
        console.log("fetched: ", this.availableLabels);
      } catch (error) {
        console.error("Error fetching labels:", error);
      }
    },

    toggleLabel(labelName) {
      if (this.selectedLabels.includes(labelName)) {
        this.selectedLabels = this.selectedLabels.filter(
          (label) => label !== labelName
        );
      } else {
        this.selectedLabels.push(labelName);
      }
    },
  },
  created() {
    this.fetchLabels();
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 5rem auto auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

h2 {
  text-align: center;
}

.answer-label {
  font-size: 18px;
}

.question-input-wrapper {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

input[type="text"] {
  flex: 1;
  font-size: 16px;
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.option-input-wrapper {
  display: flex;
  grid-template-columns: auto 1fr; /* Label und Eingabe in einer Zeile mit Grid-Layout */
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
