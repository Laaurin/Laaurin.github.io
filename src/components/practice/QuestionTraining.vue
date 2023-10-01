<template>
  <div style="height: 100%; background-color: lightgreen">
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
import MultipleChoiceQuestion from "@/components/Question/MultipleChoiceQuestion.vue";
import FlashCard from "@/components/FlashCard.vue";
import SelfEvaluation from "@/components/SelfEvaluation.vue";

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
