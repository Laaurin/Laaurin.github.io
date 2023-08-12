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
          v-for="(label, index) in userLabels"
          :key="index"
          class="label-wrapper"
        >
          <QuestionLabel
            :label-text="label.labelName"
            :clickable="true"
            :active="isActive(label.labelName)"
            @toggle-label="toggleLabel"
          ></QuestionLabel>
        </div>
        <new-label @new-label="addLabel"></new-label>
      </div>
      <button class="my-global-button" @click="saveChanges">Save</button>
      <button class="my-global-button" @click="cancelEditing">Cancel</button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import QuestionLabel from "@/components/QuestionLabel.vue";
import NewLabel from "@/components/NewLabel.vue";

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
      correctAnswerIndex: null,
      updatedQuestion: null,
    };
  },
  methods: {
    addLabel(label) {
      this.userLabels.push({
        labelName: label,
      });
    },
    cancelEditing() {
      this.$emit("close");
    },
    saveChanges() {
      let question = this.createPrivateQuestion();
      console.log(question);
      this.$emit("save", question);
    },
    toggleLabel(labelName) {
      this.questionLabels.push({ labelName: labelName });
      console.log(this.questionLabels);
    },
    isActive(labelName) {
      return this.question.questionLabels.some(
        (label) => label.label === labelName
      );
    },
    createPrivateQuestion() {
      return {
        questionText: this.questionText,
        questionLabels: this.questionLabels.map((label) => {
          return {
            labelName: label.labelName,
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
    this.questionLabels = this.question.questionLabels.map((label) => ({
      labelName: label.label,
    }));
    this.correctAnswerIndex = this.question.answerOptions.findIndex(
      (option) => option.isCorrect
    );
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
</style>
