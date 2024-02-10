import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"

import "test-console-components/dist/style.css"
import { createPlugin } from "test-console-components"

const plugin = createPlugin({ variant: "m3" })
createApp(App).use(plugin).mount("#app")
