<template>
  <div class="profile-questions">
    <div class="questions-list">
      <hr v-if="filteredQuestions.length > 0" />
      <div v-for="question in filteredQuestions" :key="question.id">
        <editable-question
          :question="question"
          @edit="editQuestionHandler(question)"
          @delete="deleteQuestionHandler(question.id)"
        ></editable-question>
        <hr />
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
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "ProfileQuestions",
  components: {
    EditQuestionWindow,
    EditableQuestion,
  },
  props: ["questions"],
  setup(props) {
    const store = useStore();
    const selectedLabel = ref("");
    const editQuestion = ref(false);
    const questionInEdit = ref(null);

    const teamLabels = computed(() => store.getters.getTeamLabels);

    const filteredQuestions = computed(() => props.questions);

    const userStats = computed(() => store.getters.userStats);

    watch(userStats, () => {
      console.log("stats updated");
    });

    const deleteQuestion = (questionId) => {
      filteredQuestions.value = filteredQuestions.value.filter(
        (question) => question.id !== questionId
      );
      store.dispatch("deleteQuestion", questionId);
    };

    const editQuestionHandler = (question) => {
      questionInEdit.value = question;
      editQuestion.value = true;
    };

    const deleteQuestionHandler = (questionId) => {
      deleteQuestion(questionId);
    };

    return {
      teamLabels,
      filteredQuestions,
      editQuestion,
      questionInEdit,
      selectedLabel,
      editQuestionHandler,
      deleteQuestionHandler,
    };
  },
};
</script>

<style scoped>
hr {
  margin: 0;
  opacity: 1;
  color: #c2c2c2;
}
.profile-questions {
  margin-top: 0;
  padding: 10px;
}

.filter-bar {
  margin-bottom: 10px;
}

.profile-page {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  /* Weitere Stile für die Hintergrundpositionierung */
}

.questions-list {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
