import "./assets/main.scss";
import layout from "./layout/LayOut.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("layout", layout);
app.mount("#app");
