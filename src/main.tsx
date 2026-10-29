import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/app/App'
import { ErrorBoundary } from '@/components/ErrorBoundary'

import '@fontsource-variable/atkinson-hyperlegible-next'
import '@fontsource-variable/source-serif-4/opsz.css'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
