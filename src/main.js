import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import css from "./assets/css/main.css";
import { MotionPlugin } from "@vueuse/motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueMeta from "vue-meta";
createApp(App).use(store).use(router).use(MotionPlugin).mount("#app");

Vue.use(VueMeta);
