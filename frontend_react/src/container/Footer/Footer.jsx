import React, {useState, useEffect} from 'react';
import './Footer.scss';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import {client} from '../../client';


const Footer = () => {


  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData; //using destructring to get the value of name, email and message

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setLoading(true);
  };


  return (
    
    <>
      <h2 className='head-text'>Take a coffee and chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:phamhuyanh277@gmail.com" className='p-text'>phamhuyanh277@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +358468953901" className='p-text'>+358468953901</a>
        </div>

      </div>


      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} name='name' />
        </div>

        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} name='email' />
        </div>

        <div>
          <textarea className='p-text' placeholder='Your Message' value={message} onChange={handleChangeInput} name='message'></textarea>
        </div>

        {/* if is loading then load the is loading text else load the send message text */}
        <button className='p-text' onClick={handleSubmit} type='button'>{loading ? 'Sending' : 'Send Message'}</button>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');