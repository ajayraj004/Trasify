import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Tittle from './components/Tittle/Tittle'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='conatiner'>
      <Programs/>
      <Tittle/>
      </div>
      
  
    </div>
  )
}

export default App