import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/init";

// eslint-disable-next-line no-unused-vars
let timer;
export default {
  async login(context, payload) {
    signInWithEmailAndPassword(auth, payload.email, payload.password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const expiresIn = +userCredential._tokenResponse.expiresIn * 1000;
        const expirationDate = new Date().getDate() + expiresIn;

        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        localStorage.setItem("userId", userCredential._tokenResponse.localId);
        localStorage.setItem("tokenExpiration", expirationDate);

        timer = setTimeout(() => {
          console.log("auto log out after 1h");
          context.dispatch("logout");
        }, expiresIn);

        context.commit("setUser", {
          token: userCredential._tokenResponse.idToken,
          userId: userCredential._tokenResponse.localId,
        });

        context.dispatch("fetchUniName");
      }
    );
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = tokenExpiration - new Date().getDate();

    if (expiresIn < 10000) {
      return;
    }

    timer = setTimeout(() => context.dispatch("logout"), expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
    const profileId = localStorage.getItem("profileId");
    const userName = localStorage.getItem("userName");
    if (profileId && userName) {
      context.commit("setActiveUser", {
        id: profileId,
        name: userName,
      });
    }
    const uniName = localStorage.getItem("uniName")
    if (uniName) {
      context.commit("setUniName", uniName)
    }
  },
  async logout(context) {
    try {
      await signOut(auth); // Authentifizierung abmelden
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("profileId");
      localStorage.removeItem("userName");
      clearTimeout(timer);
      context.commit("setUser", {
        token: null,
        userId: null,
      });
      context.commit("setActiveUser", { id: null, name: null });
    } catch (error) {
      console.error("Fehler beim Abmelden:", error.message);
    }
  },
};
