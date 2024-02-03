# Test Console Components

This repository is a proof-of-concept to create a Vue component library.

## Project setup

```sh
npm install
```

## Testing the components

```sh
npm link
cd <path-to-your-vue-project>
npm link test-console-components
```

### Your Vue project

```vue
<template>
  <div id="app">
    <TestButton />
  </div>
</template>

<script>
import { TestButton } from 'test-console-components'
```
