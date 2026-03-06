import { FC, CSSProperties } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '@/routes/Home'
import About from '@/routes/About'
import Methodology from '@/routes/Methodology'
import Research from "@/routes/Research";
import Projects from "@/routes/Projects";
import Contact from "@/routes/Contact";
import Repositories from "@/routes/Repositories";
import HCAIModels from "@/routes/HCAIModels";
import ChildDevelopmentProject from "@/routes/projects/ChildDevelopment";

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

  return (
    <BrowserRouter>
      <div style={containerStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/sviluppo-bambino"
            element={<ChildDevelopmentProject />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/hcai-models" element={<HCAIModels />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
