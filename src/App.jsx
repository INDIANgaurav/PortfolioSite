import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillCard from './components/SkillCard'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
 

const App = () => {
  return (
    <> 
    <div >
    <Navbar/>
    <Hero/>
    <SkillCard/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App
