import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🏠 Home Page</h1>
      <p>React Router funziona su Cloudflare Worker!</p>
      <Link to="/about" style={{ color: 'white', fontSize: '1.2rem', marginTop: '1rem', display: 'inline-block' }}>
        Vai alla pagina About →
      </Link>
    </div>
  )
}

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>ℹ️ About Page</h1>
      <p>Questa è la pagina About</p>
      <Link to="/" style={{ color: 'white', fontSize: '1.2rem', marginTop: '1rem', display: 'inline-block' }}>
        ← Torna alla Home
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.7 }}>
          Powered by Cloudflare Workers + Vite + React Router v7
        </div>
      </div>
    </BrowserRouter>
  )
}
