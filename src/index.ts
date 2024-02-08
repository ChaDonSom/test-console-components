import TestButtonComponent from "./components/TestButton.vue"
import TestCheckboxComponent from "./components/TestCheckbox.vue"
import TestM3CheckboxComponent from "./components/TestM3Checkbox.vue"
import TestVuetifyCheckboxComponent from "./components/TestVuetifyCheckbox.vue"
import "tailwindcss/tailwind.css"

export const TestButton = TestButtonComponent
export const TestCheckbox = TestCheckboxComponent
export const TestM3Checkbox = TestM3CheckboxComponent
export const TestVuetifyCheckbox = TestVuetifyCheckboxComponent
export default {
  TestButton: TestButtonComponent,
  TestCheckbox: TestCheckboxComponent,
  TestM3Checkbox: TestM3CheckboxComponent,
  TestVuetifyCheckbox: TestVuetifyCheckboxComponent,
}
export { default as plugin } from "./plugin"
