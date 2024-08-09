import { useState } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next';





function App() {
  const [t,i18n] = useTranslation("global")
const direction = i18n.dir();
  return (
    <div dir={direction}>    



<Navbar />
<Hero />
<About/>
<Projects />
<Skills />
<Footer />

    </div>
  )
}

export default App
