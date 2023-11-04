import { addDoc, setDoc, collection, getDocs, getDoc, doc } from "firebase/firestore";
import db from "@/firebase/init";

export default {
  async createNewUserProfile(context, dataObj) {
    console.log("writing new profile");
    const userCollectionRef = collection(
      db,
      `teams/${context.getters.userId}/profiles`
    );
    const userDocRef = await addDoc(userCollectionRef, dataObj);
    dataObj.id = userDocRef.id;
    context.commit("addNewUser", dataObj);
  },

  async fetchUserProfiles(context) {
    console.log("reading profiles");
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

  async fetchUniName(context) {
    try {
      const userId = context.getters.userId;

      // Erstellen Sie eine Referenz auf das Dokument des Benutzers (Team)
      const userDocRef = doc(db, `teams/${userId}`);

      // Das Dokument abrufen
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Überprüfen, ob das Dokument existiert
        // Der Uni-Name wird aus dem Dokument gelesen
        const uniName = userDoc.data().uni;

        localStorage.setItem("uniName", uniName);

        // Setzen Sie den Uni-Namen im Store
        context.commit('setUniName', uniName);
      } else {
        // Das Dokument wurde nicht gefunden
        console.log("Dokument nicht gefunden");
      }
    } catch (error) {
      console.error("Fehler beim Abrufen des Uni-Namens:", error);
    }
  },

  async fetchUserStats(context) {
    console.log("reading user stats");
    const userId = context.getters.userId;
    const userProfileId = context.getters.userProfileId;
    const statsCollectionRef = collection(
      db,
      `teams/${userId}/profiles/${userProfileId}/stats`
    );
    const statsQuerySnapshot = await getDocs(statsCollectionRef);
    const userStats = statsQuerySnapshot.docs.map((doc) => {
      const data = doc.data(); // Hier greifen wir auf die Daten im Dokument zu
      return {
        id: doc.id,
        totalScore: data.totalScore,
        totalSubmissions: data.totalSubmissions,
      };
    });
    context.commit("setUserStats", userStats);
  },

  async addUserSubmission(context, payload) {
    const userId = context.getters.userId;
    const userProfileId = context.getters.userProfileId;
    const questionId = payload.questionId;
    const stats = context.getters.userStats;

    let questionStats = stats.find((stat) => stat.id === questionId);

    if (questionStats) {
      questionStats.totalSubmissions++;
      questionStats.totalScore += payload.value;
    } else {
      questionStats = {
        id: questionId,
        totalSubmissions: 1,
        totalScore: payload.value,
      };
      stats.push(questionStats);
    }
    await setDoc(
      doc(db, "teams", userId, "profiles", userProfileId, "stats", questionId),
      {
        totalSubmissions: questionStats.totalSubmissions,
        totalScore: questionStats.totalScore,
      }
    );
  },

  selectUserProfile(context, user) {
    context.commit("setActiveUser", user);
    localStorage.setItem("profileId", user.id);
    localStorage.setItem("userName", user.name);
  },
};
