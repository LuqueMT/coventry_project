import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    target:"esnext",
  },
  server:{
    host:'0.0.0.0',
    port:3001,
    allowedHosts: ['coventry-site.onrender.com']
  }
<<<<<<< HEAD
})
=======
})
>>>>>>> 31726e2 (ajuste de allowed port)
