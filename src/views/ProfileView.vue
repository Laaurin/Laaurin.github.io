<template>
  <profile-questions></profile-questions>
</template>

<script>
import db, { auth } from "@/firebase/init";
import { collection, getDocs } from "firebase/firestore";
import ProfileQuestions from "@/components/ProfileQuestions.vue";

export default {
  components: { ProfileQuestions },
  data() {
    return {};
  },
  provide() {
    return {
      availableLabels: this.availableLabels,
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
    async fetchUserData() {
      try {
        const user = auth.currentUser;

        // Labels abrufen
        const labelsCollectionRef = collection(db, `users/${user.uid}/labels`);
        const labelsQuerySnapshot = await getDocs(labelsCollectionRef);
        this.availableLabels = labelsQuerySnapshot.docs.map((doc) =>
          doc.data()
        );

        console.log(
          "Verfügbare Labels erfolgreich abgerufen:",
          this.availableLabels
        );

        // Fragen abrufen
        const questionsCollectionRef = collection(
          db,
          `users/${user.uid}/questions`
        );
        const questionsQuerySnapshot = await getDocs(questionsCollectionRef);
        this.questions = questionsQuerySnapshot.docs.map((doc) => {
          const questionData = doc.data();
          return {
            id: doc.id,
            questionText: questionData.questionText,
            answerOptions: questionData.answerOptions,
            questionLabels: questionData.questionLabels || [], // Wenn Labels nicht vorhanden sind, leeres Array verwenden
          };
        });

        console.log("Fragen erfolgreich abgerufen:", this.questions);
      } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerdaten:", error.message);
      }
    },
  },
};
</script>

<style scoped></style>
