#!/bin/bash

# Navigate to the test-test-console-components directory
cd ./test-test-console-components

# Check if the parent directory is npm linked
if ! npm ls --depth=0 | grep -q "test-console-components"; then
  # Link the parent directory
  npm link test-console-components
fi

# Start npm run dev
npm run dev &

# Start npm run build -- --watch
cd ../
npm run build -- --watch
