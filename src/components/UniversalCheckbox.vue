<script lang="ts" setup>
import { inject } from "vue"
import { TestMdcCheckbox, TestM3Checkbox, TestVuetifyCheckbox } from ".."

const $tccVariant = inject("$tccVariant")
</script>

<template>
  <TestMdcCheckbox v-if="$tccVariant === 'mdc'" v-bind="$attrs"><slot /></TestMdcCheckbox>
  <TestM3Checkbox v-else-if="$tccVariant === 'm3'" v-bind="$attrs"><slot /></TestM3Checkbox>
  <TestVuetifyCheckbox v-else-if="$tccVariant === 'vuetify'" v-bind="$attrs"><slot /></TestVuetifyCheckbox>
</template>
