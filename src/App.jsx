import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='c-container'>
        <About/>
        <Projects/>
      </div>
    </main>
  )
}

export default App