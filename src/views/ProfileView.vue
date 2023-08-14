<template>
  <profile-questions></profile-questions>
</template>

<script>
import ProfileQuestions from "@/components/ProfileQuestions.vue";

export default {
  components: { ProfileQuestions },
  data() {
    return {};
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
