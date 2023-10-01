import {
  addDoc,
  getDoc,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  doc,
} from "firebase/firestore";
import db from "@/firebase/init";

export default {
  async createNewUserProfile(context, dataObj) {
    const userCollectionRef = collection(
      db,
      `teams/${context.getters.userId}/profiles`
    );
    const userDocRef = await addDoc(userCollectionRef, dataObj);
    dataObj.id = userDocRef.id;
    context.commit("addNewUser", dataObj);
  },

  async fetchUserProfiles(context) {
    const profilesCollectionRef = collection(
      db,
      `teams/${context.getters.userId}/profiles`
    );
    const profilesQuerySnapshot = await getDocs(profilesCollectionRef);
    const userProfiles = profilesQuerySnapshot.docs.map((doc) => {
      const profileData = doc.data();
      return {
        id: doc.id,
        name: profileData.name || "unknown",
      };
    });
    context.commit("setUserProfiles", userProfiles);
  },

  async addUserSubmission(context, payload) {
    console.log(payload.value, payload.questionId);
    const userId = context.getters.userId;
    const userProfileId = context.getters.userProfileId;

    // Verweise auf die Statistik-Dokumente für diese Frage
    const statisticRef = doc(
      db,
      `teams/${userId}/profiles/${userProfileId}/stats/${payload.questionId}/`
    );

    // Überprüfen, ob das Statistik-Dokument bereits existiert
    const statisticSnapshot = await getDoc(statisticRef);

    if (statisticSnapshot.exists()) {
      // Wenn das Dokument bereits existiert, aktualisiere die Statistiken
      const statisticData = statisticSnapshot.data();
      statisticData.totalSubmissions++; // Erhöhe die Gesamtanzahl der Einsendungen
      statisticData.totalScore += payload.value; // Füge die value zur Gesamtpunktzahl hinzu

      // Aktualisiere das Statistik-Dokument in der Datenbank
      await updateDoc(statisticRef, statisticData);
    } else {
      // Wenn das Dokument noch nicht existiert, erstelle es
      const newStatisticData = {
        totalSubmissions: 1,
        totalScore: payload.value, // Setze die Gesamtpunktzahl auf die value
      };

      // Erstelle das Statistik-Dokument in der Datenbank
      await setDoc(statisticRef, newStatisticData);
    }
  },
};
