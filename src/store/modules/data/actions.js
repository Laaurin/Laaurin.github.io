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
      const labelsCollectionRef = collection(db, `teams/${user.uid}/labels`);
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
        `teams/${user.uid}/questions`
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
  async uploadPrivateQuestion(context, dataObj) {
    const userCollectionRef = collection(
      db,
      `teams/${auth.currentUser.uid}/questions`
    );
    const userDocRef = await addDoc(userCollectionRef, dataObj);
    dataObj.id = userDocRef.id;
    context.commit("addTeamQuestion", dataObj);

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
          `teams/${user.uid}/labels`
        );

        // Fügen Sie das label der Sammlung hinzu und erhalten Sie die Referenz auf das neu erstellte Dokument
        const labelDocRef = await addDoc(userLabelsCollectionRef, {
          label: newLabel,
        });

        // Fügen Sie die ID zum label-Objekt hinzu und speichern Sie es im Store
        const labelObject = { label: newLabel, id: labelDocRef.id };
        context.commit("addNewLabel", labelObject);
        return labelObject.id;
      }
    } catch (error) {
      console.error("Error adding new data to user's labels:", error);
    }
  },

  async updateTeamQuestion(context, questionObject) {
    const user = auth.currentUser;
    if (user) {
      const questionsRef = doc(
        db,
        "teams",
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
      }
    }
  },

  async deleteQuestion(context, questionId) {
    const user = auth.currentUser;
    if (user) {
      const questionRef = doc(db, "teams", user.uid, "questions", questionId);
      await deleteDoc(questionRef);
      const updatedQuestions = context.getters.getTeamQuestions.filter(
        (question) => question.id !== questionId
      );
      context.commit("setTeamQuestions", updatedQuestions);
    }
  },

  async deleteLabel(context, labelId) {
    const user = auth.currentUser;
    if (user) {
      const questionRef = doc(db, "teams", user.uid, "labels", labelId);
      await deleteDoc(questionRef);
      const updatedLabels = context.getters.getTeamLabels.filter(
        (labelObject) => labelObject.id !== labelId
      );
      context.commit("setTeamLabels", updatedLabels);
      for (const questionObject of context.getters.getTeamQuestions) {
        console.log("hier: " + questionObject);
        await context.dispatch("deleteLabelFromQuestion", {
          questionObject: questionObject,
          labelId: labelId,
        });
      }
    }
  },

  async deleteLabelFromQuestion(context, payload) {
    // Entfernen Sie das Label aus den Frage-Labels
    payload.questionObject.questionLabels =
      payload.questionObject.questionLabels.filter(
        (labelObject) => labelObject.id !== payload.labelId
      );

    // Aktualisieren Sie die Frage im Store
    await context.dispatch("updateTeamQuestion", payload.questionObject);
  },
};
