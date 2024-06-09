import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:4000'         // this will kind of append the 'api' thing and will understand for the future that if any chance api is there then it is coming from the same request which is '/api/jokes'
    } ,
  },
  plugins: [react()],


})
