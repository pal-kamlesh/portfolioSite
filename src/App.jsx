// App.jsx - Updated with proper RGB conversion
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'  
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AccentColorPicker from './components/AccentColorPicker'

const accentColors = {
  green: { hsl: 'hsl(142 76% 36%)', rgb: '34, 197, 94' },
  blue: { hsl: 'hsl(221 83% 53%)', rgb: '59, 130, 246' },
  yellow: { hsl: 'hsl(48 96% 53%)', rgb: '251, 191, 36' },
  pink: { hsl: 'hsl(330 81% 60%)', rgb: '236, 72, 153' },
  purple: { hsl: 'hsl(271 81% 56%)', rgb: '147, 51, 234' },
  orange: { hsl: 'hsl(25 95% 53%)', rgb: '249, 115, 22' },
  red: { hsl: 'hsl(0 84% 60%)', rgb: '239, 68, 68' },
  teal: { hsl: 'hsl(173 80% 40%)', rgb: '20, 184, 166' },
  indigo: { hsl: 'hsl(243 75% 59%)', rgb: '99, 102, 241' },
  gray: { hsl: 'hsl(220 9% 46%)', rgb: '107, 114, 128' }
}

function App() {
  const [accentColor, setAccentColor] = useState('blue')

  useEffect(() => {
    const savedColor = localStorage.getItem('accent-color') || 'blue'
    setAccentColor(savedColor)
    updateAccentColor(savedColor)
  }, [])

  const updateAccentColor = (colorName) => {
    const color = accentColors[colorName]
    document.documentElement.style.setProperty('--accent-color', color.hsl)
    document.documentElement.style.setProperty('--accent-color-rgb', color.rgb)
  }

  const handleColorChange = (color) => {
    setAccentColor(color)
    updateAccentColor(color)
    localStorage.setItem('accent-color', color)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AccentColorPicker 
        colors={accentColors}
        selectedColor={accentColor}
        onColorChange={handleColorChange}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App