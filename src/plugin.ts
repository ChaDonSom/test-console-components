import TestButton from "./components/TestButton.vue"
import TestMdcCheckbox from "./components/TestMdcCheckbox.vue"
import TestM3Checkbox from "./components/TestM3Checkbox.vue"
import "@material/web/all"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import { aliases, md } from "vuetify/iconsets/md"

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
})

export default {
  install(app: any) {
    app.use(vuetify)
    app.component("TestButton", TestButton)
    app.component("TestCheckbox", TestMdcCheckbox)
    app.component("TestM3Checkbox", TestM3Checkbox)
  },
}

export function createPlugin(options?: { variant: "mdc" | "m3" | "vuetify" }) {
  return {
    install(app: any) {
      app.config.globalProperties.$tccVariant = options?.variant
      app.provide("$tccVariant", options?.variant)
      app.use(vuetify)
      app.component("TestButton", TestButton)
      app.component("TestCheckbox", TestMdcCheckbox)
      app.component("TestM3Checkbox", TestM3Checkbox)
    },
  }
}
