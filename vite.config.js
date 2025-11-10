import { defineConfig } from 'vite'
// import { loadEnv } from 'vite'
// import process from 'process'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/stayease/'
})

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {

//   // const env = loadEnv(mode, process.cwd(), '')
//   // const isVercel = env.VERCEL === '1'

//   return {
//     plugins: [react(), tailwindcss()],
//     base: '/stayease/',
//   }
// })