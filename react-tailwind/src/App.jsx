import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <header className='text-gray-700'>
      <div>
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
