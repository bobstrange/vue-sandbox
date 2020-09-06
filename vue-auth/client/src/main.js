import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./router";
import { store } from "./store";

import "./index.css";

const app = createApp(App);

app.use(routes);
app.use(store);
app.mount("#app");

export { app };
