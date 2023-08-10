<template>
  <profile-questions
    :questions="questions"
    :labels="labels"
  ></profile-questions>
</template>

<script>
import db, { auth } from "@/firebase/init";
import { collection, getDocs } from "firebase/firestore";
import ProfileQuestions from "@/components/ProfileQuestions.vue";

export default {
  components: { ProfileQuestions },
  data() {
    return {
      labels: ["facts", "law"],
      questions: [
        {
          answerOptions: [
            {
              isCorrect: false,
              text: "Drone Eye plc",
            },
            {
              isCorrect: false,
              text: "Drone Eye ltd",
            },
            {
              isCorrect: false,
              text: "Equatoriana Geoscience plc",
            },
            {
              isCorrect: true,
              text: "Equatoriana Geoscience ltd",
            },
          ],
          questionText:
            "What is the Name of the Respondent of the Proceedings?",
          questionLabels: ["law"],
        },
        {
          answerOptions: [
            {
              isCorrect: false,
              text: "Claimant Exhibit C5, p. 16",
            },
            {
              isCorrect: false,
              text: "Claimant Exhibit C7, p. 18, para. 11",
            },
            {
              isCorrect: true,
              text: "Respondent Exhibit R2, p. 33",
            },
            {
              isCorrect: false,
              text: "Respondent Exhibit R4, p. 35?",
            },
          ],
          questionText:
            "Where in the Case-File can we find information, that the public prosecutor in Equatoriana can proof that Mr. Field accepted two undue payments?",
          questionLabels: ["facts"],
        },
      ],
      availableLabels: [],
    };
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
  async created() {
    await this.fetchUserData();
    console.log(this.questions);
  },
};
</script>

<style scoped></style>
