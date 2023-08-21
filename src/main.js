import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
//import firebase from "firebase/app";
import "firebase/database";
import { auth } from "@/firebase/init";

console.log("auth " + auth.user);

createApp(App).use(router).use(store).mount("#app");
