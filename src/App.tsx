import { FC, CSSProperties } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

const Home: FC = () => {
  const linkStyle: CSSProperties = { 
    color: 'white', 
    fontSize: '1.2rem', 
    marginTop: '1rem', 
    display: 'inline-block' 
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🏠 Home Page</h1>
      <p>React Router funziona su Cloudflare Worker!</p>
      <Link to="/about" style={linkStyle}>
        Vai alla pagina About →
      </Link>
    </div>
  )
}

const About: FC = () => {
  const linkStyle: CSSProperties = { 
    color: 'white', 
    fontSize: '1.2rem', 
    marginTop: '1rem', 
    display: 'inline-block' 
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>ℹ️ About Page</h1>
      <p>Questa è la pagina About</p>
      <Link to="/" style={linkStyle}>
        ← Torna alla Home
      </Link>
    </div>
  )
}

const App: FC = () => {
  const containerStyle: CSSProperties = { 
    minHeight: '100vh', 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '2rem'
  }

  const footerStyle: CSSProperties = { 
    marginTop: '3rem', 
    fontSize: '0.9rem', 
    opacity: 0.7 
  }

  return (
    <BrowserRouter>
      <div style={containerStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div style={footerStyle}>
          Powered by Cloudflare Workers + Vite + React Router v7 + TypeScript
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
