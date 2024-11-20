import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>We Ensure better waste management for better world</h1>
        {/* <p>
        Trasify is a website that helps people dispose of plastic waste easily. Users can upload images of their plastic waste, and the website directs them to the nearest collection point. After that, Trasify arranges for the plastic to be picked up from their homes. This service makes it simpler to recycle and reduce plastic pollution.</p> */}
        <button className='btn'>Explore More<img src={dark_arrow} alt='' /></button>
        </div>
    </div>
  )
}

export default Hero