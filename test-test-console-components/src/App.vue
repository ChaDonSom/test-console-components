<script setup lang="ts">
import {
  TestButton,
  TestMdcCheckbox,
  TestConsoleCheckbox,
  TestM3Checkbox,
  TestVuetifyCheckbox,
  UniversalCheckbox,
} from "test-console-components"
import { inject } from "vue"

const $tccVariant = inject("$tccVariant")
</script>

<template>
  <div class="m-4">
    <TestButton class="border border-red-400 px-2">This</TestButton>
    <div class="flex flex-col">
      <TestMdcCheckbox>Test MDC checkbox</TestMdcCheckbox>
      <TestM3Checkbox>Test M3 checkbox</TestM3Checkbox>
      <TestVuetifyCheckbox color="secondary">Test Vuetify Checkbox</TestVuetifyCheckbox>
    </div>
    <div class="flex flex-col">
      <h3>Test console checkboxes</h3>
      <TestConsoleCheckbox>Default</TestConsoleCheckbox>
      <TestConsoleCheckbox disabled>Disabled</TestConsoleCheckbox>
      <TestConsoleCheckbox modelValue="indeterminate">Indeterminate</TestConsoleCheckbox>
    </div>
    <UniversalCheckbox>UniversalCheckbox: {{ $tccVariant }}</UniversalCheckbox>
  </div>
</template>
