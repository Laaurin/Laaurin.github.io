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
      <button @click="saveChanges">Save</button>
      <button @click="cancelEditing">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["availableLabels"],
  emits: ["cancel"],
  props: {
    question: Object,
  },
  data() {
    return {
      questionText: "",
      answers: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      correctAnswerIndex: null,
      updatedQuestion: null,
    };
  },
  methods: {
    cancelEditing() {
      this.$emit("cancel");
    },
    saveChanges() {
      // Hier können Sie die Änderungen speichern
      // Zum Beispiel: this.editedQuestionText speichern
      this.editedQuestionText = "";
    },
  },
  created() {
    console.log("hier: ", this.availableLabels);
    this.questionText = this.question.questionText;
    this.answers = this.question.answerOptions.map((option) => ({
      text: option.text,
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
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pop-up-inner {
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
