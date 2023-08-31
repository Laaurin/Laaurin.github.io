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
import { ref } from "vue";
export default {
  name: "PracticeView",
  components: { QuestionSelection, QuestionTraining },
  setup() {
    const questions = ref([]);
    const showOptions = ref(true);
    const startTraining = ref(false);
    return {
      questions,
      showOptions,
      startTraining,
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
