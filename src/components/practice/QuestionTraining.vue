<template>
  <div style="margin-top: 5rem">
    <MultipleChoiceQuestion
      :key="currentQuestionIndex"
      :question="currentQuestion"
      @submitted="submitted = true"
    ></MultipleChoiceQuestion>
    <button
      class="my-global-button"
      style="margin-top: 20px"
      @click="nextQuestion"
    >
      {{ submitted ? "next" : "skip" }}
    </button>
  </div>
</template>

<script>
import MultipleChoiceQuestion from "@/components/Question/MultipleChoiceQuestion.vue";

export default {
  name: "PracticeView",
  components: { MultipleChoiceQuestion },
  props: ["questionSet"],
  data() {
    return {
      questions: [],
      currentQuestionIndex: 0,
      submitted: false,
    };
  },
  created() {
    console.log(this.questionSet);
    //this.questions = this.shuffleArray(this.questionSet);
  },
  computed: {
    currentQuestion() {
      return (
        this.questionSet[this.currentQuestionIndex % this.questionSet.length] ||
        {}
      );
    },
  },
  methods: {
    nextQuestion() {
      if (this.questionSet.length > 1) {
        this.currentQuestionIndex++;
      }
      this.submitted = false;
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};
</script>

<style scoped></style>
