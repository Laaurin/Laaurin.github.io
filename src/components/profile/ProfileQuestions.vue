<template>
  <div class="profile-questions">
    <div class="questions-list">
      <!--hr v-if="filteredQuestions.length > 0" /-->
      <div v-for="(question, index) in filteredQuestions" :key="question.id">
        <!--editable-question
          :question="question"
          @edit="editQuestionHandler(question)"
          @delete="deleteQuestionHandler(question.id)"
        ></editable-question-->
        <!--editable-mobile-question :question="question" :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }"></editable-mobile-question-->
        <editable-desktop-question :question="question" :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }"></editable-desktop-question>
        <!--hr /-->
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
import EditableQuestion from "@/components/profile/editableQuestion/EditableQuestion.vue";
import EditQuestionWindow from "@/components/profile/EditQuestionWindow.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import EditableMobileQuestion from "@/components/profile/editableQuestion/EditableMobileQuestion.vue";
import EditableDesktopQuestion from "@/components/profile/editableQuestion/EditableDesktopQuestion.vue";

export default {
  name: "ProfileQuestions",
  components: {
    EditableDesktopQuestion,
    EditableMobileQuestion,
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

.even-row {
  background-color: #f0f0f0; /* Light gray */
}

.odd-row {
  background-color: #fafafa; /* White */
}

.questions-list {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
