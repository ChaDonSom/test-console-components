<script lang="ts" setup>
import { MDCFormField } from "@material/form-field"
import { MDCCheckbox } from "@material/checkbox"
import { onMounted, ref } from "vue"

const modelValue = defineModel<boolean | "indeterminate">()

const mdcCheckboxRef = ref<HTMLElement | null>(null)
const mdcFormFieldRef = ref<HTMLElement | null>(null)
const checkbox = ref<MDCCheckbox | null>(null)
const formField = ref<MDCFormField | null>(null)
onMounted(() => {
  if (mdcCheckboxRef.value) {
    checkbox.value = new MDCCheckbox(mdcCheckboxRef.value)
    if (mdcFormFieldRef.value) {
      formField.value = new MDCFormField(mdcFormFieldRef.value)
      formField.value.input = checkbox.value
    }
  }
})
// Make a unique id
const id = ref(`checkbox-${Math.random().toString(36)}`)
</script>

<template>
  <div class="mdc-touch-target-wrapper mdc-form-field" ref="mdcFormFieldRef">
    <div class="mdc-checkbox mdc-checkbox--touch" ref="mdcCheckboxRef">
      <input
        type="checkbox"
        class="mdc-checkbox__native-control"
        :id="id"
        :checked="Boolean(modelValue)"
        @change="modelValue = Boolean(($event.target as HTMLInputElement)?.checked)"
      />
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
      <div class="mdc-checkbox__ripple"></div>
      <div class="mdc-checkbox__focus-ring"></div>
    </div>
    <label :for="id"><slot>Checkbox 1</slot></label>
  </div>
</template>

<style lang="scss">
@use "@material/checkbox";
@use "@material/form-field";

@include checkbox.core-styles;
@include form-field.core-styles;
</style>
