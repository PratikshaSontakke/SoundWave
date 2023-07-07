// import path from "path"
// import react from "@vitejs/plugin-react"
// import tsconfigPaths from 'vite-tsconfig-paths';
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react(),tsconfigPaths()],
//   resolve: {
//     alias: {
//       components: path.resolve(__dirname, './src/components'),
//     }
//   },
// },
// )

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
})