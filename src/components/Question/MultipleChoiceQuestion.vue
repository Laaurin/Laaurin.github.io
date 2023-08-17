<template>
  <div
    class="container d-flex flex-column align-items-center justify-content-center"
    style="margin-top: 10px"
  >
    <question-text :question="data.questionText"></question-text>
    <div class="row row-cols-md-2" style="margin-top: 20px">
      <div
        v-for="(answer, index) in data.answerOptions"
        :key="index"
        :class="{
          'd-flex': true,
          'justify-content-lg-end': index % 2 === 0,
          'justify-content-lg-start': index % 2 !== 0,
          'justify-content-sm-center': true,
        }"
      >
        <answer-option
          :answer-option="answer"
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
      isLargeScreen: window.innerWidth >= 992,
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

<style scoped></style>
