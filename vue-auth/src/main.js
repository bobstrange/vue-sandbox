import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./router";

import "./index.css";

const app = createApp(App);

app.use(routes);
app.mount("#app");

export { app };
