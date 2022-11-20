import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex'>
        <a href="#">
          <span>Kohta Code</span>
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="skills">Skills</a>
          <a href="#blog">Blog</a>
        </nav>
      </div>
    </header>
  )
}

export default App
