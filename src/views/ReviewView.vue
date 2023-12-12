<template>
  <div>
    <h2>Unreviewed Questions</h2>
    <ul>
      <li v-for="question in unreviewedQuestions" :key="question.id">
        {{ question.text }}
        <button @click="approveQuestion(question.id)">Approve</button>
        <button @click="deleteQuestion(question.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  //setDoc
} from "firebase/firestore";
import db from "@/firebase/init";
export default {
  data() {
    return {
      unreviewedQuestions: [],
    };
  },
  methods: {
    async loadUnreviewedQuestions() {
      const unreviewedQuestionsRef = collection(db, "unreviewedQuestions");
      const querySnapshot = await getDocs(unreviewedQuestionsRef);

      this.unreviewedQuestions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
      }));
    },
    async approveQuestion(questionId) {
      // Holen Sie die ausgewählte Frage aus der Sammlung "unreviewedQuestions"
      const questionRef = doc(db, "unreviewedQuestions", questionId);
      console.log(questionId);
      const questionDoc = await getDoc(questionRef);

      // Fügen Sie die Frage zur Sammlung "publicQuestions" hinzu
      const publicQuestionsRef = collection(db, "publicQuestions");
      await addDoc(publicQuestionsRef, questionDoc.data());
      //await setDoc(publicQuestionsRef.doc(questionId), questionDoc.data());

      // Löschen Sie die Frage aus "unreviewedQuestions"
      await deleteDoc(questionRef);

      // Aktualisieren Sie die lokale Liste der unüberprüften Fragen
      this.unreviewedQuestions = this.unreviewedQuestions.filter(
        (question) => question.id !== questionId
      );
    },
    async deleteQuestion(questionId) {
      // Löschen Sie die Frage aus der Sammlung "unreviewedQuestions"
      const questionRef = doc(db, "unreviewedQuestions", questionId);
      await deleteDoc(questionRef);

      // Aktualisieren Sie die lokale Liste der unüberprüften Fragen
      this.unreviewedQuestions = this.unreviewedQuestions.filter(
        (question) => question.id !== questionId
      );
    },
  },
  async mounted() {
    // Laden Sie die unüberprüften Fragen beim Laden der Seite
    await this.loadUnreviewedQuestions();
  },
};
</script>
