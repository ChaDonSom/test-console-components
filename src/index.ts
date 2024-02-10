import TestButtonComponent from "./components/TestButton.vue"
import TestMdcCheckboxComponent from "./components/TestMdcCheckbox.vue"
import TestConsoleCheckboxComponent from "./components/TestConsoleCheckbox.vue"
import TestM3CheckboxComponent from "./components/TestM3Checkbox.vue"
import TestVuetifyCheckboxComponent from "./components/TestVuetifyCheckbox.vue"
import UniversalCheckboxComponent from "./components/UniversalCheckbox.vue"
import "tailwindcss/tailwind.css"

export const TestButton = TestButtonComponent
export const TestMdcCheckbox = TestMdcCheckboxComponent
export const TestM3Checkbox = TestM3CheckboxComponent
export const TestVuetifyCheckbox = TestVuetifyCheckboxComponent
export const TestConsoleCheckbox = TestConsoleCheckboxComponent
export const UniversalCheckbox = UniversalCheckboxComponent
export default {
  TestButton: TestButtonComponent,
  TestMdcCheckbox: TestMdcCheckboxComponent,
  TestM3Checkbox: TestM3CheckboxComponent,
  TestVuetifyCheckbox: TestVuetifyCheckboxComponent,
  TestConsoleCheckbox: TestConsoleCheckboxComponent,
  UniversalCheckbox: UniversalCheckboxComponent,
}
export { default as plugin, createPlugin } from "./plugin"
