import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

store.dispatch("authenticate").then(() => {
  createApp(App).use(router).use(store).mount("#app");
});
