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
import { ref, computed, watchEffect } from "vue";
import SelfEvaluation from "@/components/Question/flash-card/SelfEvaluation.vue";
import MultipleChoiceQuestion from "@/components/Question/multiple-choice/MultipleChoiceQuestion.vue";
import FlashCard from "@/components/Question/flash-card/FlashCard.vue";

export default {
  name: "PracticeView",
  components: { SelfEvaluation, MultipleChoiceQuestion, FlashCard },
  props: ["questionSet"],
  setup(props) {
    const questions = ref([]);
    const currentQuestionIndex = ref(0);
    const submitted = ref(false);

    const currentQuestion = computed(() => {
      return (
        questions.value[
          currentQuestionIndex.value % props.questionSet.length
        ] || {}
      );
    });

    const currentQuestionType = computed(() => {
      if (currentQuestion.value.type === "multiple-choice") {
        return "multiple-choice-question";
      } else if (currentQuestion.value.type === "flash-card") {
        return "flash-card";
      }
      return null;
    });

    const nextQuestion = () => {
      if (props.questionSet.length > 1) {
        currentQuestionIndex.value++;
      }
      submitted.value = false;
    };

    const shuffleArray = (array) => {
      const shuffledArray = [...array];

      function compareRandom() {
        return Math.random() - 0.5;
      }
      shuffledArray.sort(compareRandom);

      return shuffledArray;
    };

    // Initialisierung der Fragen beim Laden der Komponente
    watchEffect(() => {
      if (props.questionSet.length > 0) {
        questions.value = shuffleArray(props.questionSet);
      }
    });

    return {
      questions,
      currentQuestion,
      currentQuestionType,
      currentQuestionIndex,
      submitted,
      nextQuestion,
    };
  },
};
</script>

<style scoped></style>
