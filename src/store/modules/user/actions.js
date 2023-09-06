import { addDoc, collection } from "firebase/firestore";
import db, { auth } from "@/firebase/init";

export default {
  async createNewUserProfile(context, dataObj) {
    const userCollectionRef = collection(
      db,
      `teams/${auth.currentUser.uid}/profiles`
    );
    const userDocRef = await addDoc(userCollectionRef, dataObj);
  }
};
