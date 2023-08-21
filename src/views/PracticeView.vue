<template>
  <button
    v-if="!showOptions"
    @click="showOptions = !showOptions"
    class="my-global-button"
  >
    show options
  </button>
  <question-selection
    v-if="showOptions"
    @questions-selected="passQuestions"
  ></question-selection>
  <question-training
    v-if="startTraining"
    :question-set="questions"
  ></question-training>
  <button @click="console.log(questions)">debug</button>
</template>

<script>
import QuestionSelection from "@/components/practice/QuestionSelection.vue";
import QuestionTraining from "@/components/practice/QuestionTraining.vue";
export default {
  name: "PracticeView",
  components: { QuestionSelection, QuestionTraining },
  data() {
    return {
      showOptions: true,
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
      startTraining: false,
    };
  },
  methods: {
    passQuestions(newQuestions) {
      this.questions = newQuestions;
      this.startTraining = true;
      this.showOptions = false;
    },
  },
  computed: {},
  watch: {
    questions() {
      console.log("ja es ändert sich" + this.questions);
    },
  },
};
</script>

<style scoped></style>
