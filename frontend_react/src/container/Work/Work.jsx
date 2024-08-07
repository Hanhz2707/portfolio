import React, {useState, useEffect} from 'react';
import './Work.scss';

import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';


const Work = () => {
  

  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [works, setWorks] = useState([]);
  const [filteredWork, setFilteredWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilteredWork(data);
      })
  }, []);




  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    //Make the card reanimated when onClick

    setAnimateCard([{y: 1000, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);
      if (item === 'ALL') {
        setFilteredWork(works);
      } else {

        //use tag to filter the work
        
        setFilteredWork(works.filter((work) => work.tags.includes(item)));
      }
      
      
    }, 500);
  };

  
  return (
    <>
      <h2 className='head-text'>My Projects</h2>
      <div className='app__work-filter'>
        {['UI/UX', 'Web Design', 'Web Development', 'Web Animations', 'ALL'].map((item, index) => (
          <div key={index} onClick={() => handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : '' }`}>
            {item}

          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filteredWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app-flex'>
              <img src={urlFor(work.imageurl)} alt={work.name} />
                <motion.div
                  whileHover={{opacity: [0, 1]}}
                  // stagger means one at a time
                  transition={{duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5}}
                  className='app__work-hover app__flex'
                >
                  {/* wrapping the first icon */}
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      // stagger means one at a time
                      transition={{duration: 0.5}}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      // stagger means one at a time
                      transition={{duration: 0.5}}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>                  
                </motion.div>
              </div>
              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{marginTop: 10}}>{work.description}</p>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
          </div>
        ))}
      </motion.div>

    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__work'), 'work', 'app__primarybg');