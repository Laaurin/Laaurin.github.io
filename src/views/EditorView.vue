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
            <div
              class="label-wrapper"
              v-for="(labelObject, index) in userLabels"
              :key="index"
            >
              <QuestionLabel
                :label-object="labelObject"
                :clickable="true"
                @toggle-label="toggleLabel"
              ></QuestionLabel>
            </div>
            <div class="label-wrapper">
              <new-label @new-label="addLabel"></new-label>
            </div>
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
    const userLabels = inject("userLabels");

    return {
      userLabels,
    };
  },
  created() {
    console.log(this.userLabels[0].label);
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
    addLabel(labelObject) {
      this.userLabels.push(labelObject);
    },
    async submitForm() {
      // Validieren, ob eine richtige Antwort ausgewählt wurde
      if (this.correctAnswerIndex === null) {
        alert("Bitte wählen Sie eine richtige Antwort aus.");
        return;
      }

      const dataObj = this.createQuestion();
      console.log(dataObj);

      if (this.privateQuestion) {
        await this.uploadPrivateQuestion(dataObj);
      } else {
        await this.uploadPublicQuestion(dataObj);
      }

      // Optional: Zurücksetzen der Formularfelder nach dem Hinzufügen der Frage
      this.question = "";
      this.answers.forEach((answer) => (answer.text = ""));
      this.correctAnswerIndex = null;
      this.privateQuestion = false;
      this.selectedLabels = [];
    },

    createQuestion() {
      const dataObj = {
        questionText: this.question,
        answerOptions: this.answers.map((answer, index) => {
          return {
            text: answer.text,
            isCorrect: index === this.correctAnswerIndex,
          };
        }),
      };

      if (this.privateQuestion) {
        // Füge die Labels zur Frage hinzu
        dataObj.questionLabels = this.selectedLabels.map((labelObject) => {
          return {
            label: labelObject.label,
          };
        });
      }

      return dataObj;
    },

    async uploadPrivateQuestion(dataObj) {
      const userCollectionRef = collection(
        db,
        `users/${auth.currentUser.uid}/questions`
      );
      const userDocRef = await addDoc(userCollectionRef, dataObj);
      console.log("Private question created:", userDocRef.id);
    },

    async uploadPublicQuestion(dataObj) {
      try {
        const colRef = collection(db, "unreviewedQuestions");
        const docRef = await addDoc(colRef, dataObj);

        console.log("Public question uploaded:", docRef.id);
      } catch (error) {
        console.error("Error uploading public question:", error);
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

.label-list {
  display: flex;
  flex-wrap: wrap; /* Labels in mehreren Zeilen anzeigen */
  align-items: center; /* Vertikal ausrichten */
  margin-top: 10px; /* Abstand oben */
}

.label-wrapper {
  margin-right: 10px; /* Abstand zwischen den Labels */
}
</style>
