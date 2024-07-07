import React, {useState, useEffect} from 'react';
import './Testimonial.scss';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';




const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // mispelling testmonials instead of testimonials
    const query = '*[_type == "testmonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      })

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })
  }, []);

  //Shorthand for testimonial (testimonials[currentIndex])
  const test = testimonials[currentIndex];

  return (
    <>
    {/* check if testimonial exitst */}
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imageurl)} alt="testimonial" />

            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>

            {/* if currentIndex is the 1st one, we will move to the last testimonial , if not, we will move to the previous one */}

            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
              
              {/* if currentIndex is the last one, we will move to the 1st testimonial , if not, we will move to the next one */}
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>



          </div>


          
        </>
      )}

      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5, type: 'tween'}}
            key={brand._id}

          >
            <img src={urlFor(brand.imageurl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>



    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'

);