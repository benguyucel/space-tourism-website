import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useDataStore } from "./store";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
async function initApp() {
  const dataStore = useDataStore();
  await dataStore.fetchData();
  app.mount("#app");
}
initApp();
