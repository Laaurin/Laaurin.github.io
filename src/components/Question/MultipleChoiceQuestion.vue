<template>
  <div
    class="container d-flex flex-column align-items-center justify-content-center"
    style="margin-top: 10px"
  >
    <div class="row" style="width: 100%">
      <div class="col" style="width: 100%">
        <question-text :question="data.questionText"></question-text>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-6"
        style="padding: 12px"
        v-for="(answerOption, index) in data.answerOptions"
        :key="index"
      >
        <answer-option
          :answer-option="answerOption"
          :index="index"
          :submitted="submitted"
          :selected-answer-index="selectedAnswerIndex"
          @selected="selectAnswer(index)"
        ></answer-option>
      </div>
    </div>
    <button
      class="my-global-button"
      @click="submit"
      :disabled="enableSubmitButton"
    >
      Submit
    </button>
    <button
      class="my-global-button"
      style="margin-top: 20px"
      @click="this.$emit('next')"
    >
      {{ submitted ? "next" : "skip" }}
    </button>
  </div>
</template>

<script>
import AnswerOption from "@/components/Question/AnswerOption.vue";
import QuestionText from "@/components/Question/QuestionText.vue";

export default {
  name: "MultipleChoiceQuestion",
  components: { QuestionText, AnswerOption },
  props: {
    question: Object,
  },
  emits: ["submitted", "next"],
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
      if (this.$store.getters.isProfileSelected) {
        const value = this.data.answerOptions[this.selectedAnswerIndex]
          .isCorrect
          ? 1
          : 0;
        console.log("value: ", value);
        this.$store.dispatch("addUserSubmission", {
          questionId: this.data.id,
          value: value,
        });
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
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}
</style>
