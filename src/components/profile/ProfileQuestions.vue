<template>
  <div class="profile-questions">
    <div class="filter-bar">
      <label for="filter">Filter by Label:</label>
      <select class="dropdown" id="filter" v-model="selectedLabel">
        <option value="" class="dropdown-item">All Labels</option>
        <option
          class="dropdown-item"
          v-for="labelObject in teamLabels"
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
          @delete="deleteQuestion(question.id)"
        ></editable-question>
      </div>
    </div>
  </div>
  <edit-question-window
    :question="questionInEdit"
    v-if="editQuestion"
    @close="editQuestion = false"
  ></edit-question-window>
</template>

<script>
import EditableQuestion from "@/components/profile/EditableQuestion.vue";
import EditQuestionWindow from "@/components/profile/EditQuestionWindow.vue";
import { computed, ref } from "vue";
import { mapActions, useStore } from "vuex";

export default {
  name: "ProfileQuestions",
  components: {
    EditQuestionWindow,
    EditableQuestion,
  },
  setup() {
    const store = useStore();

    const selectedLabel = ref("");
    const editQuestion = ref(false);
    const questionInEdit = ref(null);

    const teamQuestions = computed(() => store.getters.getTeamQuestions);
    const teamLabels = computed(() => store.getters.getTeamLabels);
    const filteredQuestions = computed(() => {
      if (!selectedLabel.value) {
        return teamQuestions.value;
      }
      return teamQuestions.value.filter((question) =>
        question.questionLabels.some(
          (labelObject) => labelObject.label === selectedLabel.value
        )
      );
    });
    return {
      teamQuestions,
      teamLabels,
      filteredQuestions,
      editQuestion,
      questionInEdit,
      selectedLabel,
    };
  },
  methods: {
    ...mapActions(["deleteQuestion"]),

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
