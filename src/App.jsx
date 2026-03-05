import React from 'react'

export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🚀 React on Cloudflare Worker
      </h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '0.5rem' }}>
        Server-Side Rendering funzionante!
      </p>
      <div style={{ marginTop: '2rem', fontSize: '1rem', opacity: 0.8 }}>
        Powered by Cloudflare Workers + Vite + React
      </div>
    </div>
  )
}