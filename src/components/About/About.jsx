import React from 'react'
import './About.css'
import about1 from '../../assets/about1.png'
import play_icon from '../../assets/play_icon.svg'

export const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about1} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon'/>

        </div>
        <div className='about-right'>
            <h2>About Trasify</h2>
            <h3>Plastic Waste Management</h3>
            <p>Trasify is a doorstep waste collection and recycling service designed to make sustainable living seamless and efficient. Our mission is to revolutionize waste management by combining convenience with cutting-edge technology. We collect waste directly from your home, ensuring it is properly sorted and recycled to minimize environmental impact and reduce the burden on landfills.</p>
             <p> What sets Trasify apart is our integration of machine learning (ML) models to optimize waste sorting and recycling processes. Our advanced ML algorithms analyze and classify waste materials with precision, ensuring maximum recyclability and resource recovery. This not only enhances operational efficiency but also significantly reduces contamination in the recycling stream, making every effort count toward sustainability.
              By choosing Trasify, you become a vital part of a smarter, greener future.,
             </p> 
              <p>Our service is designed to empower individuals and communities to contribute effortlessly to environmental preservation. Whether it’s paper, plastic, e-waste, or organic matter, we ensure every item is handled responsibly, transforming waste into a valuable resource.
               Join us in redefining waste management with technology-driven solutions. Together, we can create a cleaner, more sustainable planet, one doorstep at a time. Trasify—where innovation meets responsibility for a bettertomorrow.
            </p>

        </div>
        
    </div>
  )
}
