import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "firebase/database";

createApp(App).use(router).use(store).mount("#app");
