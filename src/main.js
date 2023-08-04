import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
//import firebase from "firebase/app";
import "firebase/database";

createApp(App).use(router).mount("#app");
