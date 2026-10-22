import { defineConfig, loadEnv } from 'vite'
import process from 'node:process'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const hostname = env.VITE_SITE_URL || env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL
  const siteUrl = hostname
    ? new URL(/^https?:\/\//.test(hostname) ? hostname : `https://${hostname}`).origin
    : ''

  return {
    plugins: [
      react(),
      {
        name: 'social-preview-origin',
        transformIndexHtml(html, context) {
          const localUrl = context.server?.resolvedUrls?.local?.[0]
          const origin = siteUrl || (localUrl ? new URL(localUrl).origin : '')
          return html.replaceAll('https://TODO-PRODUCTION-DOMAIN.example', origin)
        },
      },
    ],
  }
})
