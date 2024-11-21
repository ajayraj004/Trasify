import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll'; 

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <h1 className="logo">Trasify</h1>
            <ul>
                <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
                <li><ScrollLink to="programs" smooth={true} offset={-260} duration={500}>Working</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
                <li><ScrollLink to="whyus" smooth={true} offset={-260} duration={500}>Why Us</ScrollLink></li>
                <li>Sell</li>
                <li>Schedule</li>
                <li><ScrollLink to="contact" smooth={true} offset={0} duration={500}>Contact</ScrollLink></li>
                <li><ScrollLink to="hero" smooth={true} offset={-260    } duration={500} className="btn">Log In</ScrollLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
