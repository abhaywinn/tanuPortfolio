import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Ensures modern JavaScript output (ES Modules)
  },
  assetsInclude: ['**/*.PNG'],
  plugins: [react(),  
    tailwindcss(),
  
  ],
})
