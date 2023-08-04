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
import db from "@/firebase/init.js";
import { query, getDocs, collection } from "firebase/firestore";

export default {
  name: "PracticeView",
  components: { MultipleChoiceQuestion },
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

    async loadQuestions() {
      const querySnap = await getDocs(query(collection(db, "questions")));

      querySnap.forEach((doc) => {
        this.questions.push(doc.data());
      });
    },
  },
  created() {
    console.log("created!");
    this.loadQuestions();
  },
};
</script>

<style scoped></style>
