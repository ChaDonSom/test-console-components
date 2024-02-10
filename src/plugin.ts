import TestButton from "./components/TestButton.vue"
import TestMdcCheckbox from "./components/TestMdcCheckbox.vue"
import TestM3Checkbox from "./components/TestM3Checkbox.vue"
import "@material/web/all"
import "vuetify/styles"
import { VuetifyOptions, createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import { aliases, md } from "vuetify/iconsets/md"

const vuetifyOptions: VuetifyOptions = {
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
}

export default {
  install(app: any) {
    const vuetify = createVuetify(vuetifyOptions)
    app.use(vuetify)
    app.component("TestButton", TestButton)
    app.component("TestCheckbox", TestMdcCheckbox)
    app.component("TestM3Checkbox", TestM3Checkbox)
  },
}

export function createPlugin(options?: {
  variant: "mdc" | "m3" | "vuetify"
  theme?: {
    colors: {
      primary: string
      secondary: string
      "on-primary": string
      "on-secondary": string
    }
  }
}) {
  return {
    install(app: any) {
      app.config.globalProperties.$tccVariant = options?.variant
      app.provide("$tccVariant", options?.variant)

      const newVuetifyOptions = {
        ...vuetifyOptions,
        ...(options?.theme ? toVuetifyOptions(options.theme) : {}),
      }
      app.use(createVuetify(newVuetifyOptions))
      if (options?.theme) toM3Styles(options.theme)
      if (options?.theme) toMdcStyles(options.theme)

      app.component("TestButton", TestButton)
      app.component("TestCheckbox", TestMdcCheckbox)
      app.component("TestM3Checkbox", TestM3Checkbox)
    },
  }
}

function toVuetifyOptions(theme: {
  colors: { primary: string; secondary: string; "on-primary": string; "on-secondary": string }
}) {
  return {
    theme: {
      defaultTheme: "custom",
      themes: {
        custom: {
          dark: false,
          colors: {
            background: "#FFFFFF",
            surface: "#FFFFFF",
            "surface-bright": "#FFFFFF",
            "surface-light": "#EEEEEE",
            "surface-variant": "#424242",
            "on-surface-variant": "#EEEEEE",
            primary: theme?.colors.primary,
            "primary-darken-1": "#ff0092",
            secondary: theme?.colors.secondary,
            "secondary-darken-1": "#018786",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
      },
    },
  }
}

function toM3Styles(theme: {
  colors: { primary: string; secondary: string; "on-primary": string; "on-secondary": string }
}) {
  document.documentElement.style.setProperty("--md-sys-color-primary", theme?.colors.primary)
  document.documentElement.style.setProperty("--md-sys-color-secondary", theme?.colors.secondary)
  document.documentElement.style.setProperty("--md-sys-color-on-primary", theme?.colors["on-primary"])
  document.documentElement.style.setProperty("--md-sys-color-on-secondary", theme?.colors["on-secondary"])
}

function toMdcStyles(theme: {
  colors: { primary: string; secondary: string; "on-primary": string; "on-secondary": string }
}) {
  document.documentElement.style.setProperty("--mdc-theme-primary", theme?.colors.primary)
  document.documentElement.style.setProperty("--mdc-theme-secondary", theme?.colors.secondary)
  document.documentElement.style.setProperty("--mdc-theme-on-primary", theme?.colors["on-primary"])
  document.documentElement.style.setProperty("--mdc-theme-on-secondary", theme?.colors["on-secondary"])
}
