import { createApp } from "vue"
import App from "./App.vue"
import "./style.css"

import "test-console-components/dist/style.css"
import { createPlugin } from "test-console-components"

const plugin = createPlugin({
  variant: "m3",
  theme: {
    colors: {
      primary: "#ff0000",
      secondary: "#00ff00",
      "on-primary": "#ff00ff",
      "on-secondary": "#ffff00",
    },
  },
})

createApp(App).use(plugin).mount("#app")
