import React, { useState } from 'react';
import './Navbar.scss';
import {HiMenuAlt4, HiX} from 'react-icons/hi'; // Importing icons from react-icons/hi
import {motion} from 'framer-motion'; // Importing motion from framer-motion

import {images} from '../../constants'; // Importing images from constants folder

const Navbar = () => {
    const [toggle, setToggle] = useState(false); // Using useState to toggle the menu



  return (

    //Using BEM methodology for class names

    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo'/>
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                // appflex for centering the text
                <li className='app__flex p-text' key={`link-${item}`}> 
                    <div/>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} size={30} color='white'/>
                {
                    toggle && (
                        <motion.div
                            whileInView={{x: [300, 0]}}
                            transition={{duration: 0.85, ease: 'easeOut'}}
                            className='app__navbar-menu--mobile'
                        >
                            <HiX onClick={() => setToggle(false)} size={30} color='white'/>
                            <ul>
                                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                    <li key={`${item}`}>
                                        <a href={`#${item}`}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }
        </div>
    </nav>
  );
};

export default Navbar;