import { defineConfig } from 'vite'
//import tailwindcss from 'tailwindcss'
//import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),         
  ],
})
