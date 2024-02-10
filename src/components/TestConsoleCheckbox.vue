<template>
  <div class="mdc-form-field" ref="rootRef">
    <div class="mdc-checkbox" :class="{ 'mdc-checkbox--disabled': disabled }" ref="mdcCheckbox">
      <input
        v-if="disabled"
        type="checkbox"
        class="mdc-checkbox__native-control"
        :id="id"
        :checked="checked"
        @change="change"
        disabled
      />
      <input v-else type="checkbox" class="mdc-checkbox__native-control" :id="id" :checked="checked" @change="change" />
      <!-- iPad / iOS won't work with @input, requires @click ^ -->
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
      <div class="mdc-checkbox__ripple"></div>
      <div class="mdc-checkbox__focus-ring"></div>
    </div>
    <label :for="id" :class="{ 'tcc-text-gray-500': disabled }"><slot></slot></label>
  </div>
</template>

<script lang="ts" setup>
import { MDCFormField } from "@material/form-field"
import { MDCCheckbox } from "@material/checkbox"
import { ref } from "@vue/reactivity"
import { computed, onMounted, PropType, watch } from "vue"

const props = defineProps({
  id: {
    default: () => `checkbox-${Math.round(Math.random() * 10000)}`,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: () => false,
  },
  modelValue: {
    type: [Boolean, Number, String] as PropType<boolean | number | "indeterminate">,
  },
})
const emit = defineEmits(["change", "update:modelValue"])

const checked = computed(() => Boolean(props.modelValue))

const rootRef = ref<HTMLElement | null>(null)
const mdcCheckbox = ref<HTMLElement | null>(null)
const formfield = ref<MDCFormField | null>(null)
const checkbox = ref<MDCCheckbox | null>(null)

onMounted(() => {
  if (rootRef.value) {
    if (mdcCheckbox.value) {
      checkbox.value = new MDCCheckbox(mdcCheckbox.value)
      formfield.value = new MDCFormField(rootRef.value)
      formfield.value.input = checkbox.value
      checkIndeterminate()
    }
  }
})
const checkIndeterminate = () => {
  if (checkbox.value) {
    checkbox.value.indeterminate = props.modelValue === "indeterminate"
  }
}
watch(() => props.modelValue, checkIndeterminate)

function change(event: Event) {
  // We don't need to emit for 'indeterminate' because it can only be reached by external changes, not user input
  emit("change", (event.target as HTMLInputElement).checked)
  emit("update:modelValue", (event.target as HTMLInputElement).checked)
}
</script>

<style lang="scss">
@use "@material/checkbox";
@use "@material/form-field";

@include checkbox.core-styles;
@include form-field.core-styles;
</style>
