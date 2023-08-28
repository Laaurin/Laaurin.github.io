<template>
  <div class="container">
    <profile-questions></profile-questions>
  </div>
</template>

<script>
import ProfileQuestions from "@/components/profile/ProfileQuestions.vue";
import { inject } from "vue";

export default {
  components: { ProfileQuestions },
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
    };
  },
  methods: {
    editQuestion() {
      // Hier implementieren: Frage bearbeiten
    },
    deleteQuestion() {
      // Hier implementieren: Frage löschen
    },
    manageLabels() {
      // Hier implementieren: Labels verwalten
    },
    toggleQuestion(index) {
      if (this.isQuestionExpanded(index)) {
        this.expandedQuestions = this.expandedQuestions.filter(
          (i) => i !== index
        );
      } else {
        this.expandedQuestions.push(index);
      }
    },
    isQuestionExpanded(index) {
      return this.expandedQuestions.includes(index);
    },
  },
};
</script>

<style scoped></style>
