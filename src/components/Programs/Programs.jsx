import React from 'react'
import './Programs.css'
import pickup from '../../assets/pickup.jpeg'
import address from '../../assets/address.jpeg'
import payment from '../../assets/payment.jpg'
import program_icon_1 from '../../assets/program_icon_1.png'
import program_icon_2 from '../../assets/program_icon_2.png'
import program_icon_3 from '../../assets/program_icon_3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'> 
        <img src={pickup} alt=''/>
        <div className='caption'>
          <img src={program_icon_1} alt=''/>
          <p>Collect Plastic</p>
        </div>
      </div>

      <div className='program'> 
        <img src={address} alt=''/>
        <div className='caption'>
          <img src={program_icon_2} alt='' />
          <p>Recycle</p>
        </div>
      </div>

      <div className='program'> 
        <img src={payment } alt=''/>
        <div className='caption'>
          <img src={program_icon_3} alt=' '/>
          <p>Utilize</p>
        </div>
      </div>

    </div>
  )
}


export default Programs