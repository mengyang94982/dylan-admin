import { createApp } from "vue";
import App from "./App.vue";
import AppLoading from "./components/common/app-loading.vue";

import { setupAssets } from "./plugins";
import { setupRouter } from "./router";
import { setupStore } from "./store";

import { setupI18n } from "./locales";

async function setupApp() {
  // import assets: js、css
  setupAssets();
  // app loading
  const appLoading = createApp(AppLoading);
  appLoading.mount("#appLoading");

  const app = createApp(App);
  setupStore(app);

  // vue router
  await setupRouter(app);

  setupI18n(app);

  appLoading.unmount();

  app.mount("#app");
}

setupApp();
