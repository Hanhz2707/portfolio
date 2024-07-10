import React, {useState, useEffect} from 'react';
import './About.scss';

import {motion} from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

// const abouts = [
//   {
//     title: 'Web Development',
//     description: 'I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and Node.js.',
//     images: images.about01
//   },

//   {
//     title: 'Web Design',
//     description: 'I am web design.',
//     images: images.about02
//   },

//   {
//     title: 'UI/UX Design',
//     description: 'I am ui/ux design.',
//     images: images.about03
//   },

//   {
//     title: 'Web Animations',
//     description: 'I ham web animations.',
//     images: images.about04
//   },

// ];


const About = () => {

  const [abouts, setAbout] = useState([]);

  //fetching data from backend
  //npm run build for sanity in backend to buil 'dist' folder || sanity start to start server
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbout(data))
  }, []);

  useState(() => {}, []);

  return (
    <>
      <h2 className='head-text'>Educations And Courses</h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            key={about.title + index}
            className='app__profile-item'
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
          >
            {/* checking schemaTypes/about.js for the imageurl 'name' */}
            <img src={urlFor(about.imageurl)} alt={about.title} />
            <h2 className='bold=text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');