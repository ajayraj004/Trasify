import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import dark_arrow from '../../assets/dark_arrow.png'

export const Contact = () => {
  return (




    <div className='contact'>

        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} /></h3>
            <p>Have questions or need assistance? We're here to help! Reach out to us anytime, and our team will get back to you promptly. Let's work together to create a cleaner, greener future!</p>
            <ul>
                <li><img src={mail_icon} />ajayrajospf@gmail.com</li>
                <li><img src={phone_icon} />+91 7535804268</li>
                <li><img src={location_icon} />Sector 62, Noida<br/>UP 09, India </li>
            </ul>
        </div>
        <div className='contact-col'>
            <form>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="" id="" rows="6" placeholder='Enter your message' required ></textarea>
                <button type='sumbit' className='btn dark-btn'>Sumbit now <img src={dark_arrow} alt=''/></button>
            </form>
            <span>{}</span>
        </div>

        
    </div>
  )
}
