import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getLocale } from './src/locales.js'
import { addPageMetadata } from './scripts/seo.js'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'parkalot-dev-metadata',
      apply: 'serve',
      transformIndexHtml(html, context) {
        const origin = new URL(context.server?.resolvedUrls?.local[0] ?? 'http://localhost:5173').origin
        const pathname = new URL(context.originalUrl ?? context.path, origin).pathname
        return addPageMetadata(html, getLocale(pathname), origin)
      },
    },
  ],
})
