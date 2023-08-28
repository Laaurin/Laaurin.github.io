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
      questions: [],
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
};
</script>

<style scoped></style>
