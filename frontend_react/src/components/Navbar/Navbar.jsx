import React from 'react';
import './Navbar.scss';

import {images} from '../../constants'; // Importing images from constants folder

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt='logo'/>
        </div>
        <ul>
            {['home', 'about', 'contact', 'work', 'skills', 'contact'].map((item) => (
                <li key={`link-${item}`}>
                    <div/>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Navbar;