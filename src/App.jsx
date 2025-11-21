import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import SoftwareSkills from './components/Skills'

function App() {
  
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />   
        <main className='flex-1'>
          <Landing />
          <Summary />
          <Experience />
          <SoftwareSkills />
          <Education />
        </main> 
        <Footer />
      </div>  
    </div>
  )
}

export default App
