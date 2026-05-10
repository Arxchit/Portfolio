import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='c-container'>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  )
}

export default App