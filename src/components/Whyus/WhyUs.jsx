import React from 'react'
import './WhyUs.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import dark_arrow from '../../assets/dark_arrow.png'

export const WhyUs = () => {
  return (
    <div className='whyus'>
        <div className='gallery'>
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />   
        </div>
        {/* <button className='btm dark-btn'>See More Here<img src={dark_arrow}/></button> */}
        
    </div>
    
  )
}
