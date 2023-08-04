<template>
  <div
    class="container d-flex flex-column align-items-center justify-content-center"
    style="margin-top: 10px"
  >
    <question-text :question="data.questionText"></question-text>
    <div class="row row-cols-2">
      <div
        :class="{
          'col-6': true,
          'd-flex': true,
          'justify-content-end': index % 2 === 0,
          'justify-content-start': index % 2 !== 0,
        }"
        ref="options"
        v-for="(answer, index) in data.answerOptions"
        :key="index"
      >
        <answer-option
          :answer-option="answer"
          :index="index"
          :submitted="submitted"
          :selected-answer-index="selectedAnswerIndex"
          :key="index"
          @selected="selectAnswer(index)"
        ></answer-option>
      </div>
    </div>
    <button @click="submit" :disabled="enableSubmitButton">Submit</button>
  </div>
</template>

<script>
import AnswerOption from "@/components/AnswerOption.vue";
import QuestionText from "@/components/QuestionText.vue";

export default {
  name: "MultipleChoiceQuestion",
  components: { QuestionText, AnswerOption },
  props: {
    question: Object,
  },
  emits: ["submitted"],
  data() {
    return {
      data: this.question,
      selectedAnswerIndex: NaN,
      submitted: false,
    };
  },
  methods: {
    submit() {
      if (isNaN(this.selectedAnswerIndex)) {
        console.log("first select an answer!");
        return;
      }
      this.submitted = true;
      this.$emit("submitted");
    },
    selectAnswer(idx) {
      this.selectedAnswerIndex = idx;
    },
  },
  computed: {
    enableSubmitButton() {
      return isNaN(this.selectedAnswerIndex);
    },
  },
  watch: {
    question() {
      this.data = this.question;
      this.selectedAnswerIndex = NaN;
      this.submitted = false;
    },
  },
};
</script>

<style scoped>
.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}

.actuallyCorrect {
  border-color: green;
}

button {
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background: #616e7f;
  color: white;
  border-radius: 4px;
}

button:hover {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(30, 144, 255, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}

button:active {
  transform: translate(0em, 0.2em);
}

button:disabled {
  background: #707070;
  opacity: 50%;
}
</style>
