<template>
  <div class="pop-up-window">
    <div class="pop-up-inner">
      <div class="mb-3">
        <div class="question-input-wrapper">
          <input
            type="text"
            id="question"
            v-model="questionText"
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
      <div class="label-list">
        <div
          class="label-wrapper"
          v-for="(labelObject, index) in userLabels"
          :key="index"
        >
          <QuestionLabel
            :label-object="labelObject"
            :clickable="true"
            :active="isActive(labelObject)"
            @toggle-label="toggleLabel"
          ></QuestionLabel>
        </div>
        <div class="label-wrapper">
          <new-label @new-label="addLabel"></new-label>
        </div>
      </div>
      <button class="my-global-button" @click="saveChanges">Save</button>
      <button class="my-global-button" @click="cancelEditing">Cancel</button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import QuestionLabel from "@/components/Label/QuestionLabel.vue";
import NewLabel from "@/components/Label/NewLabel.vue";

export default {
  components: { QuestionLabel, NewLabel },
  emits: ["close", "save"],
  props: {
    question: Object,
  },
  setup() {
    const userLabels = inject("userLabels");
    return {
      userLabels,
    };
  },
  data() {
    return {
      questionText: "",
      answers: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      questionLabels: [],
      addedLabels: [],
      correctAnswerIndex: null,
      updatedQuestion: null,
    };
  },
  methods: {
    addLabel(labelObject) {
      this.userLabels.push(labelObject);
      this.addedLabels.push(labelObject);
    },
    cancelEditing() {
      this.$emit("close");
    },
    saveChanges() {
      let question = this.createPrivateQuestion();
      this.$emit("save", question, this.addedLabels);
    },
    toggleLabel(newLabelObject) {
      // Überprüfen, ob das Label bereits in der Liste vorhanden ist
      const labelExists = this.questionLabels.some(
        (labelObject) => labelObject.label === newLabelObject.label
      );

      // Wenn das Label bereits existiert, entferne es aus der Liste
      if (labelExists) {
        this.questionLabels = this.questionLabels.filter(
          (labelObject) => labelObject.label !== newLabelObject.label
        );
      } else {
        // Ansonsten füge das Label zur Liste hinzu
        this.questionLabels.push(newLabelObject);
      }
      console.log("after toggle: ", this.questionLabels);
    },

    isActive(otherLabelObject) {
      return this.questionLabels.some(
        (labelObject) => labelObject.label === otherLabelObject.label
      );
    },

    createPrivateQuestion() {
      return {
        questionText: this.questionText,
        questionLabels: this.questionLabels.map((labelObject) => {
          return {
            label: labelObject.label,
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
  },
  created() {
    this.questionText = this.question.questionText;
    this.answers = this.question.answerOptions.map((option) => ({
      text: option.text,
    }));
    this.questionLabels = this.question.questionLabels.map((labelObject) => ({
      label: labelObject.label,
    }));
    this.correctAnswerIndex = this.question.answerOptions.findIndex(
      (option) => option.isCorrect
    );
    console.log("created questionLabels: ", this.questionLabels);
  },
};
</script>

<style scoped>
.pop-up-window {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pop-up-inner {
  background-color: white;
  border-radius: 1rem;
  padding: 32px;
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
