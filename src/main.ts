import { createApp } from "vue"
// import App from "./App.vue"
import AppLoading from "./components/common/app-loading.vue"

import { setupAssets } from "./plugins"

async function setupApp() {
  // import assets: js、css
  setupAssets()
  const appLoading = createApp(AppLoading)
  appLoading.mount("#appLoading")

  // const app = createApp(App)

  // appLoading.unmount()

  // app.mount("#app")
}

setupApp()
