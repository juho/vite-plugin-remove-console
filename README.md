# vite-plugin-remove-process-env

A vite plugin that deletes process-env

## Install

```bash
npm install vite-plugin-remove-console -D
or 
pnpm add vite-plugin-remove-console -D
```

## Usage

### Config plugin in vite.config.ts

```ts
import { defineConfig } from 'vite';
import removeConsole from 'vite-plugin-remove-process-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    removeConsole()
  ]
});
```
