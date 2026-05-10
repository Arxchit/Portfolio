import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
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
      <Footer/>
    </main>
  )
}

export default App