<template>
  <div style="margin-top: 5rem">
    <MultipleChoiceQuestion
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
import MultipleChoiceQuestion from "@/components/MultipleChoiceQuestion.vue";

export default {
  name: "PracticeView",
  components: { MultipleChoiceQuestion },
  props: ["questionSet"],
  data() {
    return {
      questions: [
        {
          answerOptions: [
            {
              isCorrect: false,
              text: "Drone Eye plc",
            },
            {
              isCorrect: false,
              text: "Drone Eye ltd",
            },
            {
              isCorrect: false,
              text: "Equatoriana Geoscience plc",
            },
            {
              isCorrect: true,
              text: "Equatoriana Geoscience ltd",
            },
          ],
          questionText:
            "What is the Name of the Respondent of the Proceedings?",
        },
        {
          answerOptions: [
            {
              isCorrect: false,
              text: "Claimant Exhibit C5, p. 16",
            },
            {
              isCorrect: false,
              text: "Claimant Exhibit C7, p. 18, para. 11",
            },
            {
              isCorrect: true,
              text: "Respondent Exhibit R2, p. 33",
            },
            {
              isCorrect: false,
              text: "Respondent Exhibit R4, p. 35?",
            },
          ],
          questionText:
            "Where in the Case-File can we find information, that the public prosecutor in Equatoriana can proof that Mr. Field accepted two undue payments?",
        },
      ],
      currentQuestionIndex: 0,
      submitted: false,
    };
  },
  created() {
    //this.questions = this.shuffleArray(this.questionSet);
  },
  computed: {
    currentQuestion() {
      return (
        this.questions[this.currentQuestionIndex % this.questions.length] || {}
      );
    },
  },
  methods: {
    nextQuestion() {
      this.currentQuestionIndex++;
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
