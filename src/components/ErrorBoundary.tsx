import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

/** Last line of defense: shows a recoverable message instead of a white screen. */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unexpected render error:', error, info)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-xl font-bold">Da ist etwas schiefgelaufen.</h1>
        <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
          Ein unerwarteter Fehler ist aufgetreten. Lade die Seite neu – dein Lernfortschritt bleibt
          in der Regel erhalten.
        </p>
        <button
          type="button"
          onClick={this.handleReload}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Seite neu laden
        </button>
      </div>
    )
  }
}
