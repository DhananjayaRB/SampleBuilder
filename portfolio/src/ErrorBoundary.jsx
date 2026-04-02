import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render error:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            padding: '2rem',
            fontFamily: 'system-ui, sans-serif',
            background: '#fef2f2',
            color: '#991b1b',
          }}
        >
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Something went wrong</h1>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              fontSize: '0.875rem',
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #fecaca',
            }}
          >
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#444' }}>
            Open DevTools (F12) → Console for the full stack trace.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
