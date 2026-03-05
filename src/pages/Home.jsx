import React from 'react'

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🚀 Vite + React Router v7
      </h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
        Funziona su Cloudflare Workers!
      </p>
      <div style={{ marginTop: '2rem', fontSize: '1rem', opacity: 0.8 }}>
        Powered by Cloudflare Pages
      </div>
    </div>
  )
}