<template>
  <div class="profile-questions">
    <div class="filter-bar">
      <i class="bi bi-filter"></i>
      <label for="filter">Filter by Label:</label>
      <select id="filter" v-model="selectedLabel">
        <option value="">All Labels</option>
        <option v-for="label in labels" :key="label" :value="label.labelName">
          {{ label.labelName }}
        </option>
      </select>
    </div>
    <div class="container questions-list">
      <div v-for="(question, index) in filteredQuestions" :key="index">
        <editable-question
          :question="question"
          :available-labels="labels"
          @edit="edit"
        ></editable-question>
      </div>
    </div>
  </div>
  <edit-question-window
    :question="questionInEdit"
    v-if="editQuestion"
    @close="editQuestion = false"
    @save="updateQuestion"
  ></edit-question-window>
</template>

<script>
import EditableQuestion from "@/components/EditableQuestion.vue";
import EditQuestionWindow from "@/components/EditQuestionWindow.vue";
import { inject } from "vue";

export default {
  name: "ProfileQuestions",
  components: {
    EditQuestionWindow,
    EditableQuestion,
  },
  setup() {
    const questions = inject("userQuestions");
    const labels = inject("userLabels");
    return {
      questions,
      labels,
    };
  },
  data() {
    return {
      selectedLabel: "",
      editQuestion: false,
      questionInEdit: null,
    };
  },
  computed: {
    filteredQuestions() {
      if (!this.selectedLabel) {
        return this.questions; // Kein Filter ausgewählt, zeige alle Fragen
      }
      const a = this.questions.filter((question) =>
        question.questionLabels.some(
          (label) => label.label === this.selectedLabel
        )
      );
      console.log(a);
      return a;
    },
  },
  methods: {
    updateQuestion(updatedQuestion) {
      this.editQuestion = !this.editQuestion;
      this.questionInEdit = updatedQuestion;
    },
    edit(question) {
      console.log("editing: ", question);
      this.questionInEdit = question;
      this.editQuestion = true;
    },
  },
};
</script>

<style scoped>
.profile-questions {
  margin-top: 20px;
}

.filter-bar {
  margin-bottom: 10px;
}

.questions-list {
  display: grid;
  grid-template-columns: 1fr; /* Eine Frage pro Zeile */
  gap: 20px;
}
</style>
