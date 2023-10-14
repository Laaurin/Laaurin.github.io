<template>
  <div style="height: 100%">
    <component
      :is="currentQuestionType"
      :key="currentQuestionIndex"
      :question="currentQuestion"
      @submit="submitted = true"
      @next="nextQuestion"
    ></component>
  </div>
</template>

<script>
import MultipleChoiceQuestion from "@/components/Question/multiple-choice/MultipleChoiceQuestion.vue";
import FlashCard from "@/components/Question/flash-card/FlashCard.vue";
import SelfEvaluation from "@/components/Question/flash-card/SelfEvaluation.vue";

export default {
  name: "PracticeView",
  components: { SelfEvaluation, MultipleChoiceQuestion, FlashCard },
  props: ["questionSet"],
  data() {
    return {
      questions: [],
      currentQuestionIndex: 0,
      submitted: false,
    };
  },
  mounted() {
    console.log(this.questionSet);
    this.questions = this.shuffleArray(this.questionSet);
  },
  computed: {
    currentQuestion() {
      return (
        this.questions[this.currentQuestionIndex % this.questionSet.length] ||
        {}
      );
    },
    currentQuestionType() {
      if (this.currentQuestion.type === "multiple-choice") {
        return "multiple-choice-question";
      } else if (this.currentQuestion.type === "flash-card") {
        console.log("flashcard");
        return "flash-card";
      }
      return null;
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
      const shuffledArray = [...array];

      function compareRandom() {
        return Math.random() - 0.5;
      }
      shuffledArray.sort(compareRandom);

      return shuffledArray;
    },
  },
};
</script>

<style scoped></style>
