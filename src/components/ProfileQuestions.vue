<template>
  <div class="profile-questions">
    <div class="filter-bar">
      <i class="bi bi-filter"></i>
      <label for="filter">Filter by Label:</label>
      <select id="filter" v-model="selectedLabel">
        <option value="">All Labels</option>
        <option
          v-for="labelObject in userLabels"
          :key="labelObject.id"
          :value="labelObject.label"
        >
          {{ labelObject.label }}
        </option>
      </select>
    </div>
    <div class="container questions-list">
      <div v-for="(question, index) in filteredQuestions" :key="index">
        <editable-question
          :question="question"
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
    const userQuestions = inject("userQuestions");
    const userLabels = inject("userLabels");
    return {
      userQuestions,
      userLabels: userLabels,
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
        return this.userQuestions;
      }
      return this.userQuestions.filter((question) =>
        question.questionLabels.some(
          (labelObject) => labelObject.label === this.selectedLabel
        )
      );
    },
  },
  methods: {
    updateQuestion(questionData) {
      this.editQuestion = !this.editQuestion;
      this.questionInEdit.questionText = questionData.questionText;
      this.questionInEdit.questionLabels = questionData.questionLabels;
      this.questionInEdit.answerOptions = questionData.answerOptions;
    },

    edit(question) {
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
