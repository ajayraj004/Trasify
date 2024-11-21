import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Tittle from './components/Tittle/Tittle'
import { About } from './components/About/About'
import { WhyUs } from './components/Whyus/WhyUs'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='conatiner'>
      <Tittle subTitle='Process' title='How It Work' />
      <Programs/>
      </div>
      <About/>
      <Tittle subtitle='' title='Why Us'/>
      <WhyUs/>
      <Tittle subtitle='Contact' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      
  
    </div>
  )
}

export default App