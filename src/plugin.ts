import TestButton from "./components/TestButton.vue"
import TestCheckbox from "./components/TestCheckbox.vue"
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
    app.component("TestCheckbox", TestCheckbox)
    app.component("TestM3Checkbox", TestM3Checkbox)
  },
}
