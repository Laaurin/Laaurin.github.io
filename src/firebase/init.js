// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyBluwo4o8Ib_NR90uQULu-J1Yq3LuAN8",
  authDomain: "vismoottrainingquestions.firebaseapp.com",
  projectId: "vismoottrainingquestions",
  storageBucket: "vismoottrainingquestions.appspot.com",
  messagingSenderId: "433861093276",
  appId: "1:433861093276:web:ed946a20b96e7f00788a59",
};

export const useAuthState = () => {
  const user = ref(null);
  const error = ref(null);
  const auth = getAuth();
  let unsubscribe;
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      (u) => (user.value = u),
      (e) => (error.value = e)
    );
  });
  onUnmounted(() => unsubscribe());
  const isAuthenticated = computed(() => user.value != null);

  return { user, error, isAuthenticated };
};

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  );

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;

export const auth = getAuth();
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
