import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'


const createAlis = (name: string) => ({ find: `@${name}`, replacement: path.resolve(__dirname, `src/${name}`) })
const createRelativeAlias = (name: string) => ({ find: `@${name}`, replacement: path.resolve(__dirname, `src/${name}`) })

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      createAlis('components'),
      createAlis('pages'),
      createAlis('utils'),
      createRelativeAlias('api'),
      createRelativeAlias('app'),
      createRelativeAlias('assets'),
    ],
  },
})
