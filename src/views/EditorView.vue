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
              <question-label
                :label-text="label.labelName"
                :clickable="true"
                @toggle-label="toggleLabel"
              >
              </question-label>
            </label>
            <new-label></new-label>
          </div>
        </div>
      </div>
      <button class="my-global-button" type="submit">add question</button>
    </form>
  </div>
</template>

<script>
import db, { auth } from "@/firebase/init.js";
import { inject } from "vue";
import { addDoc, collection } from "firebase/firestore";
import QuestionLabel from "@/components/QuestionLabel.vue";
import NewLabel from "@/components/NewLabel.vue";

export default {
  components: { NewLabel, QuestionLabel },
  setup() {
    const availableLabels = inject("userLabels");

    return {
      availableLabels,
    };
  },
  data() {
    return {
      question: "",
      answers: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      correctAnswerIndex: null,
      privateQuestion: false,
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

      await addDoc(colRef, dataObj);

      this.question = "";
      this.answers.forEach((answer) => (answer.text = ""));
      this.correctAnswerIndex = null;
    },

    createPrivateQuestion() {
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

    toggleLabel(labelName) {
      if (this.selectedLabels.includes(labelName)) {
        this.selectedLabels = this.selectedLabels.filter(
          (label) => label !== labelName
        );
      } else {
        this.selectedLabels.push(labelName);
      }
      console.log(this.selectedLabels);
    },
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
