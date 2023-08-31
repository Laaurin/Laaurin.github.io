import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import db, { auth } from "@/firebase/init";

export default {
  async fetchUserData({ commit }, user) {
    try {
      // Labels abrufen
      const labelsCollectionRef = collection(db, `users/${user.uid}/labels`);
      const labelsQuerySnapshot = await getDocs(labelsCollectionRef);
      const teamLabels = labelsQuerySnapshot.docs.map((doc) => {
        const labelData = doc.data();
        return {
          id: doc.id,
          label: labelData.label || "",
        };
      });
      commit("setTeamLabels", teamLabels);

      // Fragen abrufen
      const questionsCollectionRef = collection(
        db,
        `users/${user.uid}/questions`
      );
      const questionsQuerySnapshot = await getDocs(questionsCollectionRef);
      const teamQuestions = questionsQuerySnapshot.docs.map((doc) => {
        const questionData = doc.data();
        return {
          id: doc.id,
          questionText: questionData.questionText,
          answerOptions: questionData.answerOptions,
          questionLabels: questionData.questionLabels || [],
        };
      });
      commit("setTeamQuestions", teamQuestions);
    } catch (error) {
      console.error("Fehler beim Abrufen der Benutzerdaten:", error.message);
    }
  },

  // eslint-disable-next-line no-unused-vars
  async uploadPrivateQuestion(state, dataObj) {
    const userCollectionRef = collection(
      db,
      `users/${auth.currentUser.uid}/questions`
    );
    const userDocRef = await addDoc(userCollectionRef, dataObj);

    console.log("Private question created:", userDocRef.id);
  },

  // eslint-disable-next-line no-unused-vars
  async uploadPublicQuestion({ state, commit }, dataObj) {
    try {
      const colRef = collection(db, "unreviewedQuestions");
      const docRef = await addDoc(colRef, dataObj);

      console.log("Public question uploaded:", docRef.id);
    } catch (error) {
      console.error("Error uploading public question:", error);
    }
  },

  // eslint-disable-next-line no-unused-vars
  async addNewLabelToTeamLabels(context, newLabel) {
    try {
      const user = auth.currentUser;
      if (user) {
        const userLabelsCollectionRef = collection(
          db,
          `users/${user.uid}/labels`
        );

        // Fügen Sie das label der Sammlung hinzu und erhalten Sie die Referenz auf das neu erstellte Dokument
        const labelDocRef = await addDoc(userLabelsCollectionRef, {
          label: newLabel,
        });

        // Fügen Sie die ID zum label-Objekt hinzu und speichern Sie es im Store
        const labeledObject = { label: newLabel, id: labelDocRef.id };
        console.log("after writing: ", labeledObject);
        context.commit("addNewLabel", labeledObject);
        return labeledObject.id;
      }
    } catch (error) {
      console.error("Error adding new data to user's labels:", error);
    }
  },

  async updateTeamQuestion(context, questionObject) {
    console.log(questionObject);
    const user = auth.currentUser;
    if (user) {
      const questionsRef = doc(
        db,
        "users",
        user.uid,
        "questions",
        questionObject.id
      );
      await setDoc(questionsRef, questionObject);

      const index = context.getters.getTeamQuestions.findIndex(
        (question) => question.id === questionObject.id
      );
      if (index !== -1) {
        context.getters.getTeamQuestions[index] = questionObject;
        console.log("updating");
      }
    }
  },

  async deleteQuestion(context, questionId) {
    const user = auth.currentUser;
    if (user) {
      const questionRef = doc(db, "users", user.uid, "questions", questionId);
      await deleteDoc(questionRef);
      const updatedQuestions = context.getters.getTeamQuestions.filter(
        (question) => question.id !== questionId
      );
      context.commit("setTeamQuestions", updatedQuestions);
    }
  },
};
