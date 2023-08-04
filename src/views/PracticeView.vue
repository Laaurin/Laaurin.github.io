<template>
  <div style="margin-top: 5rem">
    <MultipleChoiceQuestion
      :question="currentQuestion"
      @submitted="submitted = true"
    ></MultipleChoiceQuestion>
    <button v-if="showNextButton" @click="nextQuestion">
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
              text: "erste",
            },
            {
              isCorrect: false,
              text: "zweite",
            },
            {
              isCorrect: false,
              text: "dritte",
            },
            {
              isCorrect: true,
              text: "richtig",
            },
          ],
          questionText: "testfrage",
        },
        {
          answerOptions: [
            {
              isCorrect: false,
              text: "hier nicht",
            },
            {
              isCorrect: true,
              text: "richitg hahah",
            },
            {
              isCorrect: false,
              text: "davor",
            },
            {
              isCorrect: false,
              text: "richtig?",
            },
          ],
          questionText: "nächste testfrage",
        },
      ],
      currentQuestionIndex: 0,
      submitted: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex] || {};
    },
    showNextButton() {
      return this.currentQuestionIndex < this.questions.length - 1;
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
    //this.loadQuestions();
  },
};
</script>


<style scoped></style>
