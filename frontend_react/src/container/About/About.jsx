import React, {useState, useEffect} from 'react';
import './About.scss';

import {motion} from 'framer-motion';

const abouts = [
  {
    title: 'Web Development',
    description: 'I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and Node.js.',
    images: ''
  },

  {
    title: 'Web Design',
    description: 'I am web design.',
    images: ''
  },

  {
    title: 'UI/UX Design',
    description: 'I am ui/ux design.',
    images: ''
  },

  {
    title: 'Web Animations',
    description: 'I ham web animations.',
    images: ''
  },

];


const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span>Good design</span>
        <br />
        means
        <span>Good business</span>
      </h2>

      <div className='app__profies'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            key={about.title + index}
            className='app__profile-item'
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
          >
            <img src={about.images} alt={about.title} />
            <h2 className='bold=text' style={{marginTop: 20}}>{about.title}</h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;