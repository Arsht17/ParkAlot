import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getLocale, localePaths } from './locales.js'

const url = new URL(window.location.href)

if (url.pathname === localePaths.he && url.searchParams.get('lang') === 'en') {
  url.pathname = localePaths.en
  url.searchParams.delete('lang')
  window.location.replace(url)
} else {
  const root = document.getElementById('root')
  const app = (
    <StrictMode>
      <App language={getLocale(url.pathname)} />
    </StrictMode>
  )

  document.documentElement.dataset.enhanced = ''
  if (root.firstElementChild) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}
