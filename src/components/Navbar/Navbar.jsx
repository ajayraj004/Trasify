import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [ sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window,scrollY > 50 ?setSticky(true) : setSticky(false);
        })
    },[])



  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        {/* <img src=' alt' /> */}
        <h1 className='logo'>Trasify</h1>

        <ul>
            <li>Home</li>
            <li>Working</li>
            <li>Sell</li>
            <li>Redeem</li>
            <li>Contact</li>
            <li><button className='btn'>Log In</button></li>
        </ul>
    </nav>
  )
}

export default Navbar