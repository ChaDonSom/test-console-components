<script lang="ts" setup>
import { ref } from "vue"

const checkbox = ref(false)
</script>

<template>
  <VCheckbox v-model="checkbox"
    ><template #label><slot /></template
  ></VCheckbox>
</template>
